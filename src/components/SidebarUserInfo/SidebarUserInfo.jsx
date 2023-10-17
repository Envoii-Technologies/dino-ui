import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from './../Avatar/Avatar';
import { Button } from './../Button/Button';

import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import placeholderAvatar from './../../assets/images/testuser.png'

import './SidebarUserInfo.scss';

export const SidebarUserInfo = ({ className, isExpanded, ...props }) => {
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
                        Max Mustermann
                    </span>
                    <span className="SidebarUserInfo__wrapper__user__email">
                        max@example.com
                    </span>
                </div>
                <Button
                    className="SidebarUserInfo__wrapper__signOut"
                    type="primary"
                    iconLeft={faSignOut}
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
