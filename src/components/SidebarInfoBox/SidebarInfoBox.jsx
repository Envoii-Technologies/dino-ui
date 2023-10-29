import React from 'react';
import PropTypes from 'prop-types';
import './SidebarInfoBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const SidebarInfoBox = ({ className, isExpanded, onClose, ...props }) =>
{
	return (
		<div className={`SidebarInfoBox ${isExpanded ? 'expanded' : 'collapsed'} ${className || ''}`}>
			<button className='SidebarInfoBox__close' onClick={onClose}>
                <FontAwesomeIcon icon={faClose} />
            </button>
			<FontAwesomeIcon className="SidebarInfoBox__info" icon={faInfoCircle}/>
		</div>
	)
}

SidebarInfoBox.propTypes =
{
	/**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Determines if the info box is expanded or collapsed.
     */
    isExpanded: PropTypes.bool,
    /**
     * Callback function to handle the close action.
     */
    onClose: PropTypes.func,
};

SidebarInfoBox.defaultProps =
{
	className: undefined,
    isExpanded: false,
    onClose: () => {},
};
