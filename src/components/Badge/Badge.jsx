import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss'

export const Badge = ({ className, label, ...props }) =>
{
	return (
		<div className={`Badge ${ className !== undefined ? className : "" }`}>
			<div className="Badge__text">
				{ label }
			</div>
		</div>
	)
}

Badge.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	label: PropTypes.string,
};

Badge.defaultProps =
{
	className: undefined,
	label: "Default Badge"
};
