import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import smallLogo from './../../assets/logos/Logo.png';
import logoIconLight from './../../assets/logos/Logo_Icon-light.svg';
import logoFullLight from './../../assets/logos/Logo_Full-light.svg';

import './Sidebar.scss';
import { SidebarButton } from '../SidebarButton/SidebarButton';
import { SidebarInfoBox } from '../SidebarInfoBox/SidebarInfoBox';
import { SidebarUserInfo } from '../SidebarUserInfo/SidebarUserInfo';
import { Button } from '../Button/Button';
import { Badge } from './../Badge/Badge';
import {
    faHouse,
    faImage,
    faLayerGroup,
    faLifeRing,
    faGear,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Sidebar = ({ className, isExpanded : propIsExpanded, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(propIsExpanded);

    useEffect(() => {
        setIsExpanded(propIsExpanded);
    }, [propIsExpanded]);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

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
                        className="Sidebar__wrapper__primary__collapse"
                        iconLeft={isExpanded ? faArrowLeft : faArrowRight}
                        onClick={toggleExpansion}
                    />
                    <nav className="Sidebar__wrapper__primary__menu">
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Dashboard"
                            isActive={true}
                            icon={faHouse}
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Karten"
                            icon={faLayerGroup}
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Medien"
                            icon={faImage}
                        />
                    </nav>
                </div>
                <div className="Sidebar__wrapper__secondary">
                    <nav className="Sidebar__wrapper__secondary__menu">
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Hilfe"
                            icon={faLifeRing}
                        />
                        <SidebarButton
                            isExpanded={isExpanded}
                            label="Einstellungen"
                            icon={faGear}
                        />
                    </nav>
                    {/* <SidebarInfoBox isExpanded={isExpanded} /> */}
                    <SidebarUserInfo isExpanded={isExpanded} />
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
