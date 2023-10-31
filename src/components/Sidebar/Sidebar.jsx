import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
    faHouse,
    faLayerGroup,
    faLifeRing,
    faGear,
    faArrowRight,
    faClose,
} from '@fortawesome/free-solid-svg-icons';

import { SidebarButton, SidebarUserInfo, Button, Badge } from './../../';
import { capitalizeFirstLetter } from './../../utils';

import logoIconLight from './../../assets/logos/Logo_Icon-light.svg';
import logoFullLight from './../../assets/logos/Logo_Full-light.svg';

import './Sidebar.scss';

export const Sidebar = ({
    className,
    isExpanded: propIsExpanded,
    userData,
    menuData,
    onLogoutAction,
    handleMobileOpen,
    mobileCloseAction,
    ...props
}) => {
    const [isExpanded, setIsExpanded] = useState(propIsExpanded);

    useEffect(() => {
        setIsExpanded(propIsExpanded);
    }, [propIsExpanded]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLogoutAction = () => {
        onLogoutAction();
    };

    const handleMobileClose = () => {
        mobileCloseAction();
    };

    return (
        <div
            className={`Sidebar ${className || ''} ${
                handleMobileOpen ? 'mobileOpen' : 'mobileClosed'
            }`}
        >
            <div
                className={`Sidebar__wrapper ${
                    isExpanded ? 'expanded' : 'collapsed'
                }`}
            >
                <div className="Sidebar__wrapper__primary">
                    <div className="Sidebar__wrapper__primary__brand">
                        {isExpanded ? (
                            <img
                                src={logoFullLight}
                                className="Sidebar__wrapper__primary__brand--full"
                            />
                        ) : (
                            <img
                                src={logoIconLight}
                                className="Sidebar__wrapper__primary__brand--logo"
                            />
                        )}
                        {userData?.roles && (
                            <Badge
                                className={
                                    isExpanded ? 'expanded' : 'collapsed'
                                }
                                label={capitalizeFirstLetter(userData.roles[0])}
                                size="sm"
                                color="purple"
                                pill={false}
                            />
                        )}
                    </div>

                    <Button
                        className={`Sidebar__wrapper__primary__collapse ${
                            isExpanded ? 'expanded' : 'collapsed'
                        }`}
                        iconLeft={faArrowRight}
                        onClick={toggleExpansion}
                    />
                    <nav className="Sidebar__wrapper__primary__menu">
                        {menuData &&
                            menuData.top
                                .filter((item) =>
                                    item.roles.some((role) =>
                                        userData.roles.includes(role)
                                    )
                                )
                                .map((item, i) => (
                                    <SidebarButton
                                        key={i}
                                        isExpanded={isExpanded}
                                        label={item.label}
                                        icon={item.icon}
                                        to={item.target}
                                        end={item.end}
                                    />
                                ))}
                    </nav>
                </div>
                <div className="Sidebar__wrapper__secondary">
                    <nav className="Sidebar__wrapper__secondary__menu">
                        {menuData &&
                            menuData.bottom
                                .filter((item) =>
                                    item.roles.some((role) =>
                                        userData.roles.includes(role)
                                    )
                                )
                                .map((item, i) => (
                                    <SidebarButton
                                        key={i}
                                        isExpanded={isExpanded}
                                        label={item.label}
                                        icon={item.icon}
                                        to={item.target}
                                        end={item.end}
                                        external={item.external}
                                    />
                                ))}
                    </nav>
                    {userData && (
                        <SidebarUserInfo
                            isExpanded={isExpanded}
                            userData={userData}
                            onLogoutAction={handleLogoutAction}
                        />
                    )}
                </div>
            </div>
            <div className="Sidebar__mobile__close">
                <Button
                    iconLeft={faClose}
                    onClick={() => handleMobileClose()}
                />
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Determines if the sidebar is expanded or collapsed.
     */
    isExpanded: PropTypes.bool,
    /**
     * User data for the sidebar user info.
     */
    userData: PropTypes.object,
    /**
     * Function to handle logout action.
     */
    onLogoutAction: PropTypes.func,
    /**
     * Function to handle mobile open state.
     */
    handleMobileOpen: PropTypes.func,
    /**
     * Function to handle mobile close action.
     */
    mobileCloseAction: PropTypes.func,
};

Sidebar.defaultProps = {
    className: undefined,
    isExpanded: true,
    userData: null,
    onLogoutAction: () => {},
    handleMobileOpen: null,
    mobileCloseAction: null,
};
