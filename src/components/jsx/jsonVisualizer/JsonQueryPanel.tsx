import React from 'react';
// @ts-expect-error -- runtime-only import
import PropTypes from 'prop-types';
import {
	Panel,
	PanelHeader,
	PanelTitle,
	PanelControls,
	PanelInput,
	PanelButton,
	PanelOutput,
} from './JsonToolPanels.styles';

interface JsonQueryPanelProps {
	query: string;
	onQueryChange: (value: string) => void;
	onRunQuery: () => void;
	result: string;
	error: string;
	disabled?: boolean;
}

const JsonQueryPanel = ({
	query,
	onQueryChange,
	onRunQuery,
	result,
	error,
	disabled = false,
}: JsonQueryPanelProps) => {
	return (
		<Panel>
			<PanelHeader>
				<PanelTitle>Query</PanelTitle>
			</PanelHeader>
			<PanelControls>
				<PanelInput
					type="text"
					value={query}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						onQueryChange(event.target.value)
					}
					placeholder="$.user.address.city or items[0].id"
					aria-label="JSON query"
				/>
				<PanelButton
					type="button"
					onClick={onRunQuery}
					disabled={disabled}
					aria-label="Run JSON query"
				>
					Run
				</PanelButton>
			</PanelControls>
			<PanelOutput role="status">
				{error || result || 'Query result will appear here.'}
			</PanelOutput>
		</Panel>
	);
};

JsonQueryPanel.propTypes = {
	query: PropTypes.string.isRequired,
	onQueryChange: PropTypes.func.isRequired,
	onRunQuery: PropTypes.func.isRequired,
	result: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};

export default JsonQueryPanel;
