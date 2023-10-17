import React from 'react';
import PropTypes from 'prop-types';
import './SidebarButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                className !== undefined ? className : ''
            }`}
            to={to}
        >
            <div className="SidebarButton__content">
                <FontAwesomeIcon className="SidebarButton__content__icon" icon={icon} />
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
    isExpanded: PropTypes.bool,
    label: PropTypes.string,
    icon: PropTypes.any,
    to: PropTypes.string,
};

SidebarButton.defaultProps = {
    className: undefined,
    isExpanded: true,
    label: 'Default',
    icon: faCancel,
    to: undefined
};
