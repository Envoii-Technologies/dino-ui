import React from 'react';
import PropTypes from 'prop-types';

import { PageWrapper, Sidebar } from './../../';

import './Layout.scss'

export const Layout = ({ className, isExpanded, ...props }) =>
{
	return (
		<div className={`Layout ${ className !== undefined ? className : "" }`}>
			<Sidebar isExpanded={isExpanded}/>
			<PageWrapper></PageWrapper>
		</div>
	)
}

Layout.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	isExpanded: PropTypes.bool,
};

Layout.defaultProps =
{
	className: undefined,
	isExpanded: true,
};
