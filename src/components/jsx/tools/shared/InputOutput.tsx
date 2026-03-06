import React from 'react';
import type { InputOutputProps } from './InputOutput.types';
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

export type { InputOutputProps };

const InputOutput = ({
	title,
	children,
	inputValue,
	inputLabel,
	outputValue = '',
	outputLabel = '',
	onInputChange,
	onOutputChange,
	inputReadOnly = false,
	outputReadOnly = true,
	inputPlaceholder = '',
	outputPlaceholder = '',
	error = '',
}: InputOutputProps) => {
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

export default InputOutput;
