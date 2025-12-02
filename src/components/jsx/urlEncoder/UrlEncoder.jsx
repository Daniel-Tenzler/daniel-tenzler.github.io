import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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

const UrlEncoder = ({ initialValue }) => {
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

	const handleChange = (e) => {
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

UrlEncoder.propTypes = {
	initialValue: PropTypes.string,
};

export default UrlEncoder;
