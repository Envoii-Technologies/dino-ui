import React from 'react';
import PropTypes from 'prop-types';
import './LoadingIndicator.scss'

export const LoadingIndicator = ({ className, size, showLabel, ...props }) =>
{
	return (
		<div className={`LoadingIndicator ${ className !== undefined ? className : "" }`}>
			<div className="LoadingIndicator__wrapper">
			<div className={`LoadingIndicator__wrapper__spinner ${size}`}></div>
			{
				showLabel && <div className="LoadingIndicator__wrapper__label">Seite wird geladen ...</div>
			}
			</div>

		</div>
	)
}

LoadingIndicator.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
	showLabel: PropTypes.bool,
};

LoadingIndicator.defaultProps =
{
	className: undefined,
	size: "md",
	showLabel: false,
};
