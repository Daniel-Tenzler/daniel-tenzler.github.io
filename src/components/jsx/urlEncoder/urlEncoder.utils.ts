export interface DomainHighlight {
	start: number;
	end: number;
	text: string;
	encoded: boolean;
}

export interface HighlightedUrlPart {
	text: string;
	highlighted: boolean;
}

const ENCODED_COLON = '%(?:25)*3a';
const ENCODED_SLASH = '%(?:25)*2f';
const ENCODED_DOT = '%(?:25)*2e';
const LABEL = '[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?';
const DOMAIN = `${LABEL}(?:(?:\\.|${ENCODED_DOT})${LABEL})+`;
const SLASH_PAIR = `(?:\\/\\/|${ENCODED_SLASH}${ENCODED_SLASH})`;
const URL_PREFIX = `(?:(?:https?|ftp)(?::|${ENCODED_COLON})${SLASH_PAIR}|\\/\\/|${ENCODED_SLASH}${ENCODED_SLASH})`;
const URL_DOMAIN_REGEX = new RegExp(
	`${URL_PREFIX}(?:[^\\s/?#%]*@)?(${DOMAIN})`,
	'gi'
);

export const findDomainHighlights = (input: string): DomainHighlight[] => {
	const highlights: DomainHighlight[] = [];

	for (const match of input.matchAll(URL_DOMAIN_REGEX)) {
		const domain = match[1];
		const matchedText = match[0];
		const matchStart = match.index ?? 0;
		// The captured domain is the final segment of the regex match.
		const relativeDomainStart = matchedText.lastIndexOf(domain);

		if (relativeDomainStart === -1) {
			continue;
		}

		const start = matchStart + relativeDomainStart;
		const end = start + domain.length;

		highlights.push({
			start,
			end,
			text: domain,
			encoded: /%/i.test(matchedText),
		});
	}

	return highlights.sort((a, b) => a.start - b.start);
};

export const buildHighlightedUrlParts = (
	input: string
): HighlightedUrlPart[] => {
	const highlights = findDomainHighlights(input);

	if (highlights.length === 0) {
		return [{ text: input, highlighted: false }];
	}

	const parts: HighlightedUrlPart[] = [];
	let cursor = 0;

	for (const highlight of highlights) {
		if (highlight.start < cursor) {
			continue;
		}

		if (highlight.start > cursor) {
			parts.push({
				text: input.slice(cursor, highlight.start),
				highlighted: false,
			});
		}

		parts.push({
			text: input.slice(highlight.start, highlight.end),
			highlighted: true,
		});
		cursor = highlight.end;
	}

	if (cursor < input.length) {
		parts.push({ text: input.slice(cursor), highlighted: false });
	}

	return parts;
};
