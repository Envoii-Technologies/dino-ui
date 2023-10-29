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
    type,
    ...props
}) => {
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useLayout();

    const handleLogoutAction = () => {
        onLogoutAction();
    };

    return (
        <>
            <div
                className={`Layout ${className || ''}`}
            >
                <MobilePageHeader onOpenMenu={toggleMobileMenu} />
                <Sidebar
                    isExpanded={isExpanded}
                    userData={userData}
                    onLogoutAction={handleLogoutAction}
                    handleMobileOpen={isMobileMenuOpen}
                    mobileCloseAction={closeMobileMenu}
                />
                <PageWrapper type={type}>{children}</PageWrapper>
            </div>
        </>
    );
};

Layout.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Whether the sidebar is expanded by default.
     */
    isExpanded: PropTypes.bool,
    /**
     * User data for the sidebar.
     */
    userData: PropTypes.object,
    /**
     * Callback function for logout action.
     */
    onLogoutAction: PropTypes.func,
    /**
     * The type of layout ('primary' or 'secondary').
     */
    type: PropTypes.oneOf(['primary', 'secondary']),
};

Layout.defaultProps = {
    className: undefined,
    isExpanded: true,
    type: "primary",
};
