import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './OverflowMenuButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const OverflowMenuButton = ({ isDisabled, showShortcut, label,icon, className, onClick, ...props }) =>
{

    return(
    <button 
        className={`OverflowMenuButton ${className !== undefined ? className : '' }`}
        disabled={isDisabled ? 'disabled' : false}
        onClick={onClick}
    >
        {
            icon && <FontAwesomeIcon className='OverflowMenuButton__icon' icon={icon}/>
        }
        <div className="OverflowMenuButton__label">{label}</div>
        {
            showShortcut && <div className="OverflowMenuButton__shortcut">⌘P</div>
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
