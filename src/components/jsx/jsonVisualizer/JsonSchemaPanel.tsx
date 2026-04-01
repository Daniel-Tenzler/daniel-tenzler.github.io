import React from 'react';
// @ts-expect-error -- runtime-only import
import PropTypes from 'prop-types';
import {
	Panel,
	PanelHeader,
	PanelTitle,
	PanelTextarea,
	PanelButton,
	PanelOutput,
} from './JsonToolPanels.styles';

interface JsonSchemaPanelProps {
	schemaInput: string;
	onSchemaChange: (value: string) => void;
	onValidate: () => void;
	result: string;
	disabled?: boolean;
}

const JsonSchemaPanel = ({
	schemaInput,
	onSchemaChange,
	onValidate,
	result,
	disabled = false,
}: JsonSchemaPanelProps) => {
	return (
		<Panel>
			<PanelHeader>
				<PanelTitle>Schema Validation</PanelTitle>
				<PanelButton
					type="button"
					onClick={onValidate}
					disabled={disabled}
					aria-label="Validate JSON against schema"
				>
					Validate
				</PanelButton>
			</PanelHeader>
			<PanelTextarea
				value={schemaInput}
				onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
					onSchemaChange(event.target.value)
				}
				placeholder='{"type":"object","required":["name"],"properties":{"name":{"type":"string"}}}'
				aria-label="JSON schema input"
			/>
			<PanelOutput role="status">
				{result || 'Validation output will appear here.'}
			</PanelOutput>
		</Panel>
	);
};

JsonSchemaPanel.propTypes = {
	schemaInput: PropTypes.string.isRequired,
	onSchemaChange: PropTypes.func.isRequired,
	onValidate: PropTypes.func.isRequired,
	result: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
};

export default JsonSchemaPanel;
