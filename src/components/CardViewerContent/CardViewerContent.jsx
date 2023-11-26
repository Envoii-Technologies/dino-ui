import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LoadingIndicator } from './../../';

import './CardViewerContent.scss';

export const CardViewerContent = ({ className, ...props }) => {
	const [isLoading, setIsLoading] = useState(false);

	if (isLoading) {
		return <LoadingIndicator />;
	} else {
		return (
			<div className={`CardViewerContent ${className || ""}`}>
				<div className="CardViewerContent__wrapper">
					<div className="CardViewerContent__wrapper--left">
						a
					</div>
					<div className="CardViewerContent__wrapper--right">
						b	
					</div>
				</div>
			</div>
		)
	}
}

CardViewerContent.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

CardViewerContent.defaultProps =
{
	className: undefined,
};
