import React, { useMemo, useState } from 'react';
// @ts-expect-error -- runtime-only import
import PropTypes from 'prop-types';
import {
	TreeContainer,
	TreeHeader,
	TreeTitle,
	TreeSearch,
	TreeRows,
	TreeRow,
	ToggleButton,
	KeyText,
	ValueText,
	TypeBadge,
	CopyPathButton,
	EmptyTreeMessage,
} from './JsonTreeView.styles';

interface JsonTreeViewProps {
	data: unknown;
	searchTerm: string;
	onSearchChange: (value: string) => void;
	onCopyPath: (path: string) => void;
}

const isExpandable = (value: unknown): boolean =>
	Array.isArray(value) || (value !== null && typeof value === 'object');

const getType = (value: unknown): string => {
	if (value === null) {
		return 'null';
	}
	if (Array.isArray(value)) {
		return 'array';
	}
	return typeof value;
};

const formatValue = (value: unknown): string => {
	if (typeof value === 'string') {
		return `"${value}"`;
	}
	if (value === undefined) {
		return 'undefined';
	}
	if (typeof value === 'object') {
		return Array.isArray(value)
			? `[${value.length} items]`
			: `{${Object.keys(value as Record<string, unknown>).length} keys}`;
	}
	return String(value);
};

const getChildrenEntries = (
	value: unknown
): Array<[string, unknown, string]> => {
	if (Array.isArray(value)) {
		return value.map((item, index) => [`[${index}]`, item, `${index}`]);
	}
	if (value && typeof value === 'object') {
		return Object.entries(value as Record<string, unknown>).map(
			([key, child]) => [key, child, key]
		);
	}
	return [];
};

const nodeMatches = (value: unknown, query: string): boolean => {
	if (!query) {
		return true;
	}
	const normalized = query.toLowerCase();
	if (String(value).toLowerCase().includes(normalized)) {
		return true;
	}
	if (value && typeof value === 'object') {
		for (const [key, child] of getChildrenEntries(value)) {
			if (
				key.toLowerCase().includes(normalized) ||
				nodeMatches(child, query)
			) {
				return true;
			}
		}
	}
	return false;
};

const JsonTreeView = ({
	data,
	searchTerm,
	onSearchChange,
	onCopyPath,
}: JsonTreeViewProps) => {
	const [expanded, setExpanded] = useState<Record<string, boolean>>({
		$: true,
	});

	const hasData = data !== null && data !== undefined;

	const normalizedSearch = useMemo(() => searchTerm.trim(), [searchTerm]);

	const renderNode = (
		key: string,
		value: unknown,
		path: string,
		depth: number
	): React.ReactNode => {
		if (!nodeMatches(value, normalizedSearch)) {
			return null;
		}

		const expandable = isExpandable(value);
		const isOpen = expanded[path] ?? depth < 1;
		const children = expandable ? getChildrenEntries(value) : [];

		return (
			<React.Fragment key={path}>
				<TreeRow $depth={depth}>
					<ToggleButton
						type="button"
						onClick={() => {
							if (!expandable) {
								return;
							}
							setExpanded((prev) => ({
								...prev,
								[path]: !isOpen,
							}));
						}}
						aria-label={
							expandable
								? `${isOpen ? 'Collapse' : 'Expand'} ${key}`
								: `Value ${key}`
						}
					>
						{expandable ? (isOpen ? '▼' : '▶') : '•'}
					</ToggleButton>
					<KeyText>{key}</KeyText>
					<TypeBadge>{getType(value)}</TypeBadge>
					<ValueText>{formatValue(value)}</ValueText>
					<CopyPathButton
						type="button"
						onClick={() => onCopyPath(path)}
						aria-label={`Copy path ${path}`}
					>
						Copy Path
					</CopyPathButton>
				</TreeRow>
				{expandable &&
					isOpen &&
					children.map(([childKey, childValue, token]) => {
						const childPath = Array.isArray(value)
							? `${path}[${token}]`
							: `${path}.${token}`;
						return renderNode(
							childKey,
							childValue,
							childPath,
							depth + 1
						);
					})}
			</React.Fragment>
		);
	};

	return (
		<TreeContainer>
			<TreeHeader>
				<TreeTitle>JSON Tree Explorer</TreeTitle>
				<TreeSearch
					type="text"
					value={searchTerm}
					onChange={(event) => onSearchChange(event.target.value)}
					placeholder="Search keys or values"
					aria-label="Search tree"
				/>
			</TreeHeader>
			<TreeRows>
				{hasData ? (
					renderNode('$', data, '$', 0)
				) : (
					<EmptyTreeMessage>
						No parsed JSON available.
					</EmptyTreeMessage>
				)}
			</TreeRows>
		</TreeContainer>
	);
};

JsonTreeView.propTypes = {
	data: PropTypes.any,
	searchTerm: PropTypes.string.isRequired,
	onSearchChange: PropTypes.func.isRequired,
	onCopyPath: PropTypes.func.isRequired,
};

export default JsonTreeView;
