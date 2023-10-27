import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Dot } from './../../';

import placeholderImage from './../../assets/images/userPlaceholder.svg';

import './Avatar.scss';

export const AvatarSizes = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
};

export const Avatar = ({ className, name, size, type, status, ...props }) => {
    const getFirstLetters = (str) => {
        const firstLetters = str
            .split(' ')
            .map((word) => word[0])
            .join('');

        return firstLetters.toUpperCase();
    };

    return (
        <div
            className={`
			Avatar ${className !== undefined ? className : ''}
			size-${size}
			`}
            {...props}
        >
            {type === 'placeholder' ? (
                <>
                    <img
                        className="Avatar__image"
                        src={placeholderImage}
                        alt="user-image"
                        style={{ display: 'flex' }}
                    />
                </>
            ) : (
                <div className="Avatar__name">{getFirstLetters(name)}</div>
            )}

            {status !== 'none' && (
                    <div className="Avatar__status">
                        <Dot size={size} state={status} />
                    </div>
                )}
        </div>
    );
};

Avatar.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Size of avatar
     */
    size: PropTypes.oneOf(Object.keys(AvatarSizes)),
    type: PropTypes.oneOf(['placeholder', 'text']),
    status: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
    /**
     * Initials shown in Avatar
     */
    name: PropTypes.string,
};

Avatar.defaultProps = {
    className: undefined,
    size: AvatarSizes.md,
    type: 'text',
    status: 'none',
    name: 'Jane Doe',
};
