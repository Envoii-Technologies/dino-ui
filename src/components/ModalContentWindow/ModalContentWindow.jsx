import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Button } from './../Button';

import { useModalContentWindow } from './useModalContentWindow';

import logoIconDark from './../../assets/logos/Logo_Icon-dark.png';

import './ModalContentWindow.scss';

export const ModalContentWindow = ({
    className,
    show,
    title,
    children,
    onAction,
    onCancel,
    ...props
}) => {
    const { fadeOut, handleShowDelay } = useModalContentWindow({
        show,
        onAction,
        onCancel,
    });

    if (!show) {
        return null;
    }

    return (
        <>
            <div
                className={`modalContentWrapper ${className || ''}
                ${
                    fadeOut ? 'fadeOut' : 'fadeIn'
                }`}
                {...props}
            >
                <div
                    className={`ModalContentWindow ${
                        fadeOut ? 'fadeOut' : 'fadeIn'
                    }`}
                >
                    <div className="ModalContentWindow__header">
                        <img
                            src={logoIconDark}
                            className="ModalContentWindow__header__brand"
                        />
                        <div className="ModalContentWindow__header__title">
                            { title }
                        </div>
                        <Button
                            className="ModalContentWindow__header__close"
                            type="tertiary"
                            iconLeft={faXmark}
                            onClick={handleShowDelay}
                        />
                    </div>
                    <div className="ModalContentWindow__wrapper">
                        <div className="ModalContentWindow__wrapper__content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ModalContentWindow.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    show: PropTypes.bool,
    title: PropTypes.string,
    
    onCancel: PropTypes.func,
};

ModalContentWindow.defaultProps = {
    className: undefined,
    show: false,
    title: 'Default Title',
    onAction: undefined,
    onCancel: undefined,
};
