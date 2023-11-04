import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

export const Heading = ({ className, children, size, type, ...props }) =>
{
	return (
		<div className={`Heading ${ className || "" } ${size}-${type}`}>
			{children}
		</div>
	)
}

Heading.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
	type: PropTypes.oneOf(['regular', 'medium', 'semiBold', 'bold']),
};

Heading.defaultProps =
{
	className: undefined,
	size: "md",
	type: "regular",
};
