import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({ className, scrollable, children, ...props }) =>
{
	return (
		<div className={`Container ${ className !== undefined ? className : "" } ${scrollable ? 'scrollable' : 'static'}`}>
			<div className="Container__wrapper">
				<div className="Container__wrapper__container">
					<div className="Container__wrapper__container__content">
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}

Container.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	scrollable: PropTypes.bool
};

Container.defaultProps =
{
	className: undefined,
	scrollable: true,
};
