import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './SidebarButton.scss';

export const SidebarButton = ({
    className,
    label,
    icon,
    isExpanded,
    isActive,
    to,
    ...props
}) => {
    return (
        <Link
            className={`SidebarButton ${isActive ? 'active' : ''}  ${
                className || ''
            }
            ${isExpanded ? 'expanded' : 'collapsed'}`}
            to={to}
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
        </Link>
    );
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
};
