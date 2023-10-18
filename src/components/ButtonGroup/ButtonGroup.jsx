import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.scss'

export const ButtonGroup = ({ className, children, ...props }) =>
{
	return (
		<div className={`ButtonGroup ${ className !== undefined ? className : "" }`}>
			{ children }
		</div>
	)
}

ButtonGroup.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

ButtonGroup.defaultProps =
{
	className: undefined,
};
