import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './../Avatar/Avatar';
import { Button } from './../Button/Button';

import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import placeholderAvatar from './../../assets/images/testuser.png'

import './SidebarUserInfo.scss';

export const SidebarUserInfo = ({ className, isExpanded, userData, onLogoutAction, ...props }) => {

    if(!userData)
    {
        return null;
    }
    
    return (
        <div
            className={`SidebarUserInfo ${
                className !== undefined ? className : ''
            } ${isExpanded ? 'expanded' : 'collapsed'}`}
        >
            <Avatar image={placeholderAvatar} />
            <div className="SidebarUserInfo__wrapper">
                <div className="SidebarUserInfo__wrapper__user">
                    <span className="SidebarUserInfo__wrapper__user__username">
                        { userData.firstname } { userData.lastname }
                    </span>
                    <span className="SidebarUserInfo__wrapper__user__email">
                        { userData.email }
                    </span>
                </div>
                <Button
                    className="SidebarUserInfo__wrapper__signOut"
                    type="primary"
                    iconLeft={faSignOut}
                    onClick={onLogoutAction}
                />
            </div>
        </div>
    );
};

SidebarUserInfo.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

SidebarUserInfo.defaultProps = {
    className: undefined,
};
