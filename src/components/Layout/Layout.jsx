import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, PageWrapper, Sidebar } from './../../';

import logoFullLight from './../../assets/logos/Logo_Full-light.svg';

import './Layout.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
                <div className="Layout__mobile__header">
                    <img
                        src={logoFullLight}
                        className="Layout__mobile__header__brand"
                    />
                    <Button size="sm" iconLeft={faBars} onClick={handleOpenMenu}/>
                </div>
                {
                    
                }
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
