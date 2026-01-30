import React from 'react';
import PropTypes from 'prop-types';
import { PageContainer, MainContent } from './LayoutContainer.styles';

export default function LayoutContainer({
	children,
	mainId = 'main-content',
	mainClassName = '',
}) {
	return (
		<PageContainer>
			{children[0]}
			<MainContent id={mainId} className={mainClassName}>
				{children[1]}
			</MainContent>
			{children[2]}
		</PageContainer>
	);
}

LayoutContainer.propTypes = {
	children: PropTypes.node.isRequired,
	mainId: PropTypes.string,
	mainClassName: PropTypes.string,
};
