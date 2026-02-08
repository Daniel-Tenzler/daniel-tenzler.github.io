import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './CopyButton.styles';

const CopyButton = ({ text, onCopy, copied, ...props }) => {
	const handleClick = async () => {
		try {
			await window.navigator.clipboard.writeText(text);
			if (onCopy) onCopy();
		} catch {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand('copy');
				if (onCopy) onCopy();
			} catch (fallbackErr) {
				console.error('Failed to copy:', fallbackErr);
			}
			document.body.removeChild(textArea);
		}
	};

	return (
		<Button onClick={handleClick} copied={copied} {...props}>
			{copied ? 'Copied!' : 'Copy'}
		</Button>
	);
};

CopyButton.propTypes = {
	text: PropTypes.string.isRequired,
	onCopy: PropTypes.func,
	copied: PropTypes.bool,
};

CopyButton.defaultProps = {
	onCopy: null,
	copied: false,
};

export default CopyButton;
