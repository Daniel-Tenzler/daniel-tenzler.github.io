import React, { useState } from 'react';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	InputField,
	ErrorMessage,
	MessagesContainer,
	ButtonContainer,
	DecodeButton,
	EncodeButton,
} from './UrlEncoder.styles';

export interface UrlEncoderProps {
	initialValue?: string;
}

const UrlEncoder = ({ initialValue = '' }: UrlEncoderProps) => {
	const [value, setValue] = useState(initialValue || '');
	const [error, setError] = useState('');

	const onDecode = () => {
		try {
			setError('');
			setValue(decodeURIComponent(value));
		} catch (e) {
			console.error(e);
			setError('Invalid encoded string');
		}
	};

	const onEncode = () => {
		setError('');
		setValue(encodeURIComponent(value));
	};

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
		if (error) setError('');
	};

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>URL Encoder/Decoder</SectionTitle>
				</SectionHeader>
				<InputField
					value={value}
					onChange={handleChange}
					placeholder="Enter text to encode or decode..."
					aria-label="URL text to encode or decode"
					aria-invalid={!!error}
					aria-describedby={error ? 'url-encoder-error' : undefined}
					spellCheck={false}
					autoComplete="off"
					autoCapitalize="off"
				/>
				<MessagesContainer>
					{error && (
						<ErrorMessage id="url-encoder-error" role="alert">
							{error}
						</ErrorMessage>
					)}
				</MessagesContainer>
				<ButtonContainer>
					<DecodeButton onClick={onDecode} aria-label="Decode URL">
						Decode
					</DecodeButton>
					<EncodeButton onClick={onEncode} aria-label="Encode URL">
						Encode
					</EncodeButton>
				</ButtonContainer>
			</ContentWrapper>
		</Container>
	);
};

export default UrlEncoder;
