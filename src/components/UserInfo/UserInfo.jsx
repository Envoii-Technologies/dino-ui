import React from 'react';
import PropTypes from 'prop-types';
import './UserInfo.scss';

import { Avatar } from './../../';

export const UserInfo = ({
    className,
    username,
    email,
    isExpanded,
    mode,
    ...props
}) => {
    return (
        <div
            className={`UserInfo ${className || ''} ${
                isExpanded ? 'expanded' : 'collapsed'
            }`}
        >
            <Avatar name={`${username}`} />
            <div className={`UserInfo__wrapper ${mode}`}>
                <div className="UserInfo__wrapper__user">
                    <span className="UserInfo__wrapper__user__username">
                        {username}
                    </span>
                    {email && (
                        <span className="UserInfo__wrapper__user__email">
                            {email}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    mode: PropTypes.oneOf(['dark', 'light']),
    isExpanded: PropTypes.bool,
    username: PropTypes.string,
    email: PropTypes.string,
};

UserInfo.defaultProps = {
    className: undefined,
    mode: 'dark',
    isExpanded: true,
    username: "",
    email: "",
};
