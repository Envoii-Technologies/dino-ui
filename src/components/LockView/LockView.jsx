import React from 'react';
import PropTypes from 'prop-types';
import './LockView.scss';

export const LockView = ({ className, ...props }) =>
{
	return (
		<div className={`LockView ${ className || "" }`}></div>
	)
}

LockView.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

LockView.defaultProps =
{
	className: undefined,
};
