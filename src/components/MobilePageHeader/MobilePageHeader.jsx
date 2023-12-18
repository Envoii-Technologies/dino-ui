import React from 'react';
import PropTypes from 'prop-types';

import logoIconLight from './../../assets/logos/Logo_Icon-light.png';

import { Button } from './../../';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import './MobilePageHeader.scss'

export const MobilePageHeader = ({ className, onOpenMenu, ...props }) =>
{
	const openMenuHandler = () =>
	{
		onOpenMenu();
	}

	return (
		<div className={`MobilePageHeader ${ className !== undefined ? className : "" }`}>
			<img
                src={logoIconLight}
                className="MobilePageHeader__brand"
            />
			<Button size="sm" iconLeft={faBars} onClick={openMenuHandler}/>
		</div>
	)
}

MobilePageHeader.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

MobilePageHeader.defaultProps =
{
	className: undefined,
};
