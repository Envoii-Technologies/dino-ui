import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';

export const Text = ({ className, children, size, type, italic, ...props }) =>
{
	return (
		<span className={`Text ${ className || '' } ${size}-${type}${italic ? '-italic': ''}`} {...props}>
			{children}
		</span>
	)
}

Text.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	children: PropTypes.any,
	size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
	type: PropTypes.oneOf(['regular', 'medium', 'semiBold', 'bold']),
	italic: PropTypes.bool,
};

Text.defaultProps =
{
	className: undefined,
	children: undefined,
	size: "md",
	type: "regular",
	italic: false,
};
