import React from 'react';
import PropTypes from 'prop-types';
import './PageWrapper.scss'

export const PageWrapper = ({ className, children, ...props }) =>
{
	return (
		<div className={`PageWrapper ${ className !== undefined ? className : "" }`}>
			<div className="PageWrapper__content">
				<section>

				{ children }
				</section>
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
};

PageWrapper.defaultProps =
{
	className: undefined,
};
