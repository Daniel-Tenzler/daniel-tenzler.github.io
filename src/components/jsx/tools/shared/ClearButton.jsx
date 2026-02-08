import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ClearButton.styles';

const ClearButton = ({ onClear, ...props }) => {
	return (
		<Button onClick={onClear} {...props}>
			Clear
		</Button>
	);
};

ClearButton.propTypes = {
	onClear: PropTypes.func.isRequired,
};

export default ClearButton;
