import React from 'react';
import PropTypes from 'prop-types';
import './SidebarInfoBox.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export const SidebarInfoBox = ({ className, isExpanded, ...props }) =>
{
	return (
		<div className={`SidebarInfoBox ${isExpanded ? 'expanded' : 'collapsed'} ${ className !== undefined ? className : "" }`}>
			<button className='SidebarInfoBox__close'><FontAwesomeIcon icon={faClose}/></button>
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
};

SidebarInfoBox.defaultProps =
{
	className: undefined,
};
