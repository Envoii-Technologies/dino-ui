import React from 'react';
import PropTypes from 'prop-types';
import './PageWrapper.scss'

export const PageWrapper = ({ className, children, type, ...props }) =>
{
	return (
		<div className={`PageWrapper ${ className !== undefined ? className : "" }`}>
			<div className={`PageWrapper__content ${type}`}>
				{ children }
			</div>
		</div>
	)
}

PageWrapper.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	type: PropTypes.oneOf(["primary", "secondary"]),
};

PageWrapper.defaultProps =
{
	className: undefined,
	type: "primary",
};
