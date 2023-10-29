import React from 'react';
import PropTypes from 'prop-types';
import './Divider.scss'

export const Divider = ({ className, children, ...props }) =>
{
	return (
		<div className={`Divider ${ className !== undefined ? className : "" }`}>
			<div className="Divider__left"></div>
			{
				children && (
					<div className="Divider__children">{children}</div>
				)
			}
			
			<div className="Divider__right"></div>
		</div>
	)
}

Divider.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	children: PropTypes.any,
};

Divider.defaultProps =
{
	className: undefined,
	children: undefined
};
