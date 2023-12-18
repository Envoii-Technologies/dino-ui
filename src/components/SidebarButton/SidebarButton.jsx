import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

import './SidebarButton.scss';

export const SidebarButton = ({
    className,
    label,
    icon,
    isExpanded,
    isActive,
    end,
    to,
    handleOnClick,
    external,
    ...props
}) => {
    if (!external) {
        return (
            <NavLink
                className={`SidebarButton
                ${className || ''}
                ${isExpanded ? 'expanded' : 'collapsed'}`}
                to={to}
                end={end}
                onClick={handleOnClick}
            >
                <div className="SidebarButton__content">
                    <FontAwesomeIcon
                        className="SidebarButton__content__icon"
                        icon={icon}
                    />
                    <span
                        className={`SidebarButton__content__label ${
                            isExpanded ? 'expanded' : 'collapsed'
                        }`}
                    >
                        {label}
                    </span>
                </div>
            </NavLink>
        );
    } else {
        return (
            <a
                href={to}
                className={`SidebarButton
                ${className || ''}
                ${isExpanded ? 'expanded' : 'collapsed'}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="SidebarButton__content">
                    <FontAwesomeIcon
                        className="SidebarButton__content__icon"
                        icon={icon}
                    />
                    <span
                        className={`SidebarButton__content__label ${
                            isExpanded ? 'expanded' : 'collapsed'
                        }`}
                    >
                        {label}
                    </span>
                </div>
            </a>
        );
    }
};

SidebarButton.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Determines if the button is expanded or collapsed.
     */
    isExpanded: PropTypes.bool,
    /**
     * Label text for the button.
     */
    label: PropTypes.string,
    /**
     * Icon for the button.
     */
    icon: PropTypes.any,
    /**
     * URL to navigate to when the button is clicked.
     */
    to: PropTypes.string,
    end: PropTypes.bool,
    /**
     * Determines if the button is in an active state.
     */
    isActive: PropTypes.bool,
};

SidebarButton.defaultProps = {
    className: undefined,
    isExpanded: true,
    label: 'Default',
    icon: faCancel,
    to: '/',
    isActive: false,
    end: false,
};
