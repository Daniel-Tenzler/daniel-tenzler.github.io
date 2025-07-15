import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	ButtonContainer,
	Container,
	DecodeButton,
	EncodeButton,
	InputField,
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
			<InputField
				as="textarea"
				value={value}
				onChange={handleChange}
				placeholder="Enter text to encode or decode..."
				aria-label="URL text to encode or decode"
				aria-invalid={!!error}
				aria-describedby={error ? "url-encoder-error" : undefined}
			/>
			{error && (
				<div id="url-encoder-error" role="alert" style={{ color: 'red', margin: '0.5em auto', textAlign: 'center' }}>
					{error}
				</div>
			)}
			<ButtonContainer>
				<DecodeButton 
					onClick={onDecode}
					aria-label="Decode URL"
				>
					Decode
				</DecodeButton>
				<EncodeButton 
					onClick={onEncode}
					aria-label="Encode URL"
				>
					Encode
				</EncodeButton>
			</ButtonContainer>
		</Container>
	);
};

UrlEncoder.propTypes = {
	initialValue: PropTypes.string
};

export default UrlEncoder;
