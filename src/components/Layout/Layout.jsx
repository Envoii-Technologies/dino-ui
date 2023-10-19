import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, PageWrapper, Sidebar } from './../../';

import './Layout.scss';

export const Layout = ({
    className,
    isExpanded,
    userData,
    children,
    onLogoutAction,
    ...props
}) => {
	const handleLogoutAction = () => {
		onLogoutAction();
	}
    return (
        <>
            <div
                className={`Layout ${className !== undefined ? className : ''}`}
            >
                <Sidebar isExpanded={isExpanded} userData={userData} onLogoutAction={handleLogoutAction} />
                <PageWrapper>{children}</PageWrapper>
            </div>
        </>
    );
};

Layout.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
};

Layout.defaultProps = {
    className: undefined,
    isExpanded: true,
};
