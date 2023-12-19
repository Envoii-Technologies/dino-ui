import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './OverflowMenuButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const OverflowMenuButton = ({ isDisabled, isDangerous, shortcut, label,icon, className, onClick, ...props }) =>
{

    return(
    <button 
        className={`OverflowMenuButton ${className || ''}`}
        disabled={isDisabled ? 'disabled' : false}
        onClick={onClick}
        {...props}
    >
        {
            icon && <FontAwesomeIcon className={`OverflowMenuButton__icon ${isDangerous ? 'dangerous' : ''}`} icon={icon}/>
        }
        <div className={`OverflowMenuButton__label ${isDangerous ? 'dangerous' : ''}`}>{label}</div>
        {
            shortcut && <div className="OverflowMenuButton__shortcut">${shortcut}</div>
        }
    </button>
    )
}

OverflowMenuButton.propTypes = {
        /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    label: PropTypes.string,
}

OverflowMenuButton.defaultProps = {
    label: undefined,
    isDisabled: false,
}
