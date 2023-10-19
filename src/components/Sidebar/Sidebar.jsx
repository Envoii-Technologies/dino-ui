import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import smallLogo from './../../assets/logos/Logo.png';
import logoIconLight from './../../assets/logos/Logo_Icon-light.svg';
import logoFullLight from './../../assets/logos/Logo_Full-light.svg';

import './Sidebar.scss';
import { SidebarButton } from '../SidebarButton/SidebarButton';
import { SidebarUserInfo } from '../SidebarUserInfo/SidebarUserInfo';
import { Button } from '../Button/Button';
import { Badge } from './../Badge/Badge';
import {
    faHouse,
    faImage,
    faLayerGroup,
    faLifeRing,
    faGear,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = ({ className, isExpanded : propIsExpanded, userData, onLogoutAction, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(propIsExpanded);

    useEffect(() => {
        setIsExpanded(propIsExpanded);
    }, [propIsExpanded]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const handleLogoutAction = () => {
        onLogoutAction();
    }

    return (
        <div className={`Sidebar ${className !== undefined ? className : ''}`}>
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
                        <Badge className={isExpanded ? 'expanded' : 'collapsed'} label="Editor" size="sm" color="purple" pill={false}/>
                    </div>

                    <Button
                        className={`Sidebar__wrapper__primary__collapse ${isExpanded ? 'expanded' : 'collapsed'}`}
                        iconLeft={faArrowRight}
                        onClick={toggleExpansion}
                    />
                    <nav className="Sidebar__wrapper__primary__menu">
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Dashboard"
                            isActive={true}
                            icon={faHouse}
                            to="/acme/"
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Karten"
                            icon={faLayerGroup}
                            to="/acme/cards"
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Medien"
                            icon={faImage}
                            to="/acme/media"
                        />
                    </nav>
                </div>
                <div className="Sidebar__wrapper__secondary">
                    <nav className="Sidebar__wrapper__secondary__menu">
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Hilfe"
                            icon={faLifeRing}
                            to="/acme/docs"
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Einstellungen"
                            icon={faGear}
                            to="/acme/settings"
                        />
                    </nav>
                    {
                        userData && <SidebarUserInfo isExpanded={isExpanded} userData={userData} onLogoutAction={handleLogoutAction} />
                    }
                    
                </div>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    isExpanded: PropTypes.bool,
};

Sidebar.defaultProps = {
    className: undefined,
    isExpanded: true,
};
