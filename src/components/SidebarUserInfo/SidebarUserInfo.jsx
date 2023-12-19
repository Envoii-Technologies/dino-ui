import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './../Avatar/Avatar';
import { Button } from './../Button/Button';

import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import './SidebarUserInfo.scss';

export const SidebarUserInfo = ({
    className,
    isExpanded,
    userData,
    onLogoutAction,
    ...props
}) => {
    if (!userData) {
        return null;
    }

    return (
        <div
            className={`SidebarUserInfo  ${className || ''} ${isExpanded ? 'expanded' : 'collapsed'}`}
            {...props}
        >
            <Avatar name={`${userData.firstname} ${userData.lastname}`} />
            <div className="SidebarUserInfo__wrapper">
                <div className="SidebarUserInfo__wrapper__user">
                    <span className="SidebarUserInfo__wrapper__user__username">
                        {userData.firstname} {userData.lastname}
                    </span>
                    <span className="SidebarUserInfo__wrapper__user__email">
                        {userData.email}
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
    /**
     * Determines if the user info is expanded or collapsed.
     */
    isExpanded: PropTypes.bool,
    /**
     * User data object containing user information.
     */
    userData: PropTypes.shape({
        avatar: PropTypes.string,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    /**
     * Function to handle logout action.
     */
    onLogoutAction: PropTypes.func,
};

SidebarUserInfo.defaultProps = {
    className: undefined,
    isExpanded: false,
    userData: null,
    onLogoutAction: () => {},
};
