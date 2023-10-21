import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobilePageHeader, PageWrapper, Sidebar } from './../../';

import { useLayout } from './useLayout';

import './Layout.scss';

export const Layout = ({
    className,
    isExpanded,
    userData,
    children,
    onLogoutAction,
    ...props
}) => {
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useLayout();

    const handleLogoutAction = () => {
        onLogoutAction();
    };

    return (
        <>
            <div
                className={`Layout ${className !== undefined ? className : ''}`}
            >
                <MobilePageHeader onOpenMenu={toggleMobileMenu} />
                <Sidebar
                    isExpanded={isExpanded}
                    userData={userData}
                    onLogoutAction={handleLogoutAction}
                    handleMobileOpen={isMobileMenuOpen}
                    mobileCloseAction={closeMobileMenu}
                />
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
