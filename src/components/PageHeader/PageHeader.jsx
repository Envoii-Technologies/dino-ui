import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss'

export const PageHeader = ({ className, title, subtitle, children, ...props }) =>
{
	return (
		<div className={`PageHeader ${ className !== undefined ? className : "" }`}>
			<div className="PageHeader__left">
			<div className="PageHeader__left__title">
				{ title }
			</div>
			<div className="PageHeader__left__subtitle">
				{ subtitle }
			</div>
			</div>
			<div className="PageHeader__right">
				{
					children
				}
			</div>
			{/*  */}
		</div>
	)
}

PageHeader.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

PageHeader.defaultProps =
{
	className: undefined,
};
