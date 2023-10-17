import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss'

export const Label = ({ className, content, ...props }) =>
{
	return (
		<div className={`Label ${ className !== undefined ? className : "" }`}>
			{ content }
		</div>
	)
}

Label.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	content: PropTypes.string,
};

Label.defaultProps =
{
	className: undefined,
	content: "default"
};
