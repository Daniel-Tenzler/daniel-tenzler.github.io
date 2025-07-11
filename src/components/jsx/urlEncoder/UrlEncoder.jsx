import React, { useState } from 'react';
import {
	ButtonContainer,
	Container,
	DecodeButton,
	EncodeButton,
	InputField,
} from './UrlEncoder.styles';

const UrlEncoder = () => {
	const [value, setValue] = useState('');

	const onDecode = () => {
		try {
			setValue(decodeURIComponent(value));
		} catch (e) {
			console.error(e);
			setValue('Invalid encoded string');
		}
	};

	const onEncode = () => {
		setValue(encodeURIComponent(value));
	};

	return (
		<Container>
			<InputField
				as="textarea"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Enter text to encode or decode..."
			/>
			<ButtonContainer>
				<DecodeButton onClick={onDecode}>Decode</DecodeButton>
				<EncodeButton onClick={onEncode}>Encode</EncodeButton>
			</ButtonContainer>
		</Container>
	);
};

UrlEncoder.propTypes = {};

export default UrlEncoder;
