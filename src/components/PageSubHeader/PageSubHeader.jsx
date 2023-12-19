import React from 'react';
import PropTypes from 'prop-types';
import './PageSubHeader.scss'

export const PageSubHeader = ({ className,  children, ...props }) =>
{
	return (
		<div className={`PageSubHeader ${className || ''}`} {...props}>
			{ children }
		</div>
	)
}

PageSubHeader.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

PageSubHeader.defaultProps =
{
	className: undefined,
};
