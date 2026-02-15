import React, { useState, useCallback, useEffect } from 'react';
import {
	CodeOutputWrapper,
	CodeHeader,
	CodeLabel,
	CopyButton,
	CodeBlock,
	CopyIcon,
} from './CodeOutput.styles';

export interface CodeOutputProps {
	code: string;
	language?: string;
	label?: string;
}

const CodeOutput = ({
	code,
	language = 'CSS',
	label,
}: CodeOutputProps) => {
	const [copied, setCopied] = useState(false);
	const [copyTimeout, setCopyTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

	const handleCopy = useCallback(() => {
		if (copied) return;

		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(code).then(() => {
				setCopied(true);

				// Clear existing timeout if any
				if (copyTimeout) {
					clearTimeout(copyTimeout);
				}

				// Reset after 2 seconds
				const timeout = setTimeout(() => {
					setCopied(false);
				}, 2000);

				setCopyTimeout(timeout);
			});
		}
	}, [code, copied, copyTimeout]);

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (copyTimeout) {
				clearTimeout(copyTimeout);
			}
		};
	}, [copyTimeout]);

	return (
		<CodeOutputWrapper>
			<CodeHeader>
				<CodeLabel>{label || `${language} Output`}</CodeLabel>
				<CopyButton
					onClick={handleCopy}
					disabled={copied || !code}
					className={copied ? 'copied' : ''}
					aria-label="Copy code to clipboard"
					type="button"
				>
					<CopyIcon
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={
								copied
									? 'M5 13l4 4L19 7'
									: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
							}
						/>
					</CopyIcon>
					{copied ? 'Copied!' : 'Copy'}
				</CopyButton>
			</CodeHeader>
			<CodeBlock role="region" aria-label={`${language} code output`}>
				{code || 'No code generated yet'}
			</CodeBlock>
		</CodeOutputWrapper>
	);
};

export default CodeOutput;
