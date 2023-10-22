import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Button } from './../Button';

import { useModalContentWindow } from './useModalContentWindow';

import logoIconDark from './../../assets/logos/Logo_Icon-dark.svg';

import './ModalContentWindow.scss';

export const ModalContentWindow = ({
    className,
    show,
    title,
    children,
    onAction,
    onCancel,
    actionText,
    cancelText,
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
                className={`modalContentWrapper ${
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
    onAccept: undefined,
    onCancel: undefined,
    acceptText: 'Akzeptieren',
    cancelText: 'Abbrechen',
};

/**
 * <div className={`ModalContentWindow ${fadeOut ? 'fadeOut' : 'fadeIn'}`}>
                    <div className="ModalContentWindow__header">
                        <h4 className="ModalContentWindow__header__title">
                            {title ? title : 'Default Message'}
                        </h4>
                        <Button
                            className="ModalContentWindow__header__close"
                            type="tertiary"
                            iconLeft={faXmark}
                            onClick={handleShowDelay}
                        />
                    </div>
                    {body && <div className="ModalContentWindow__body">{body}</div>}

                    <div className="ModalContentWindow__footer">
                        <Button
                            type="secondary"
                            label={cancelText}
                            onClick={handleShowDelay}
                        />
                        {onAction && (
                            <Button
                                type="success"
                                label={actionText}
                                onClick={onAction}
                            />
                        )}
                    </div>
                </div>
 */
