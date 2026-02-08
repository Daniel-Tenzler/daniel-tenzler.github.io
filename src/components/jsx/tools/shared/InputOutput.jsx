import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	InputGrid,
	InputColumn,
	ColumnHeader,
	ColumnTitle,
	Textarea,
	ErrorMessage,
} from './InputOutput.styles';

const InputOutput = ({
	title,
	children,
	inputValue,
	inputLabel,
	outputValue,
	outputLabel,
	onInputChange,
	onOutputChange,
	inputReadOnly,
	outputReadOnly,
	inputPlaceholder,
	outputPlaceholder,
	error,
}) => {
	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>{title}</SectionTitle>
				</SectionHeader>

				{children}

				{error && (
					<ErrorMessage role="alert" aria-live="polite">
						{error}
					</ErrorMessage>
				)}

				<InputGrid>
					<InputColumn>
						<ColumnHeader>
							<ColumnTitle>{inputLabel}</ColumnTitle>
						</ColumnHeader>
						<Textarea
							value={inputValue}
							onChange={onInputChange}
							readOnly={inputReadOnly}
							placeholder={inputPlaceholder}
							aria-label={inputLabel}
							spellCheck={false}
						/>
					</InputColumn>

					{outputLabel && (
						<InputColumn>
							<ColumnHeader>
								<ColumnTitle>{outputLabel}</ColumnTitle>
							</ColumnHeader>
							<Textarea
								value={outputValue}
								onChange={onOutputChange}
								readOnly={outputReadOnly}
								placeholder={outputPlaceholder}
								aria-label={outputLabel}
								spellCheck={false}
							/>
						</InputColumn>
					)}
				</InputGrid>
			</ContentWrapper>
		</Container>
	);
};

InputOutput.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
	inputValue: PropTypes.string.isRequired,
	inputLabel: PropTypes.string.isRequired,
	outputValue: PropTypes.string,
	outputLabel: PropTypes.string,
	onInputChange: PropTypes.func.isRequired,
	onOutputChange: PropTypes.func,
	inputReadOnly: PropTypes.bool,
	outputReadOnly: PropTypes.bool,
	inputPlaceholder: PropTypes.string,
	outputPlaceholder: PropTypes.string,
	error: PropTypes.string,
};

InputOutput.defaultProps = {
	children: null,
	outputValue: '',
	outputLabel: '',
	onOutputChange: null,
	inputReadOnly: false,
	outputReadOnly: true,
	inputPlaceholder: '',
	outputPlaceholder: '',
	error: '',
};

export default InputOutput;
