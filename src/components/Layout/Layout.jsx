import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MobilePageHeader, PageWrapper, Sidebar } from './../../';

import './Layout.scss';

export const Layout = ({
    className,
    isExpanded,
    userData,
    children,
    onLogoutAction,
    ...props
}) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const handleLogoutAction = () => {
        onLogoutAction();
    };

    const handleOpenMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }


    return (
        <>
            <div
                className={`Layout ${className !== undefined ? className : ''}`}
            >
                <MobilePageHeader onOpenMenu={handleOpenMenu}/>
                <Sidebar isExpanded={isExpanded} userData={userData} onLogoutAction={handleLogoutAction} handleMobileOpen={openMobileMenu} mobileCloseAction={() => setOpenMobileMenu(false)}/>
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
