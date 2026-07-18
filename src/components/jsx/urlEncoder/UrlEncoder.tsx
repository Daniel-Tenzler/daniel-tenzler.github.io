import React, { useRef, useState } from 'react';
import type { UrlEncoderProps } from './UrlEncoder.types';
import {
	Container,
	ContentWrapper,
	SectionHeader,
	SectionTitle,
	EditorWrapper,
	HighlightLayer,
	HighlightedDomain,
	HighlightNotice,
	InputField,
	ErrorMessage,
	MessagesContainer,
	ButtonContainer,
	DecodeButton,
	EncodeButton,
} from './UrlEncoder.styles';
import { buildHighlightedUrlParts } from './urlEncoder.utils';

const MAX_HIGHLIGHTED_INPUT_LENGTH = 100000;

const UrlEncoder = ({ initialValue = '' }: UrlEncoderProps) => {
	const [value, setValue] = useState(initialValue || '');
	const [error, setError] = useState('');
	const highlightLayerRef = useRef<HTMLDivElement>(null);

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

	const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
		if (!highlightLayerRef.current) {
			return;
		}

		highlightLayerRef.current.scrollTop = e.currentTarget.scrollTop;
		highlightLayerRef.current.scrollLeft = e.currentTarget.scrollLeft;
	};

	const isHighlightActive = value.length <= MAX_HIGHLIGHTED_INPUT_LENGTH;
	let highlightOffset = 0;
	const highlightedText = isHighlightActive
		? buildHighlightedUrlParts(value).map((part) => {
				const key = `${highlightOffset}-${part.text.length}`;
				highlightOffset += part.text.length;

				if (part.highlighted) {
					return (
						<HighlightedDomain key={key}>
							{part.text}
						</HighlightedDomain>
					);
				}

				return <React.Fragment key={key}>{part.text}</React.Fragment>;
			})
		: null;

	return (
		<Container>
			<ContentWrapper>
				<SectionHeader>
					<SectionTitle>URL Encoder/Decoder</SectionTitle>
				</SectionHeader>
				<EditorWrapper>
					{isHighlightActive && (
						<HighlightLayer
							ref={highlightLayerRef}
							aria-hidden="true"
						>
							{highlightedText}
						</HighlightLayer>
					)}
					<InputField
						value={value}
						onChange={handleChange}
						onScroll={handleScroll}
						placeholder="Enter text to encode or decode..."
						aria-label="URL text to encode or decode"
						aria-invalid={!!error}
						aria-describedby={
							error ? 'url-encoder-error' : undefined
						}
						spellCheck={false}
						autoComplete="off"
						autoCapitalize="off"
						data-highlight-active={
							isHighlightActive ? 'true' : 'false'
						}
					/>
				</EditorWrapper>
				<MessagesContainer>
					{!isHighlightActive && (
						<HighlightNotice>
							Domain highlighting is paused for large inputs.
						</HighlightNotice>
					)}
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
