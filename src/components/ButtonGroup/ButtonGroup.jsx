import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.scss'

export const ButtonGroup = ({ className, children, compact, fluid, ...props }) =>
{
	return (
		<div className={`ButtonGroup ${ className !== undefined ? className : "" } ${compact ? 'compact' : ''} ${fluid ? 'fluid' : ''}`}>
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
	compact: PropTypes.bool,
	fluid: PropTypes.bool,
};

ButtonGroup.defaultProps =
{
	className: undefined,
	compact: false,
	fluid: false,
};
