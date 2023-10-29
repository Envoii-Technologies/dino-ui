import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { faRocket, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Button } from './../Button';
import { ButtonGroup } from './../ButtonGroup';

import { useModalInfoWindow } from './useModalInfoWindow';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ModalInfoWindow.scss';


export const ModalInfoWindow = ({
    className,
    show,
    title,
    type,
    icon,
    body,
    onAction,
    onCancel,
    actionText,
    cancelText,
    ...props
}) => {
    const { fadeOut, handleShowDelay } = useModalInfoWindow({ show, onAction, onCancel });

    if (!show) {
        return null;
    }

    return (
        <>
            <div className={`modalInfoWrapper ${fadeOut ? 'fadeOut' : 'fadeIn'}`} {...props}>
                <div className={`ModalInfoWindow ${fadeOut ? 'fadeOut' : 'fadeIn'}`}>
                    <div className="ModalInfoWindow__header">
                        <Button
                            className="ModalInfoWindow__header__close"
                            type="tertiary"
                            size="lg"
                            iconLeft={faXmark}
                            onClick={handleShowDelay}
                        />

                        <div
                            className={`ModalInfoWindow__header__icon ${type}`}
                        >
                            <FontAwesomeIcon icon={icon} />
                        </div>

                        <div className="ModalInfoWindow__header__title">
                            {title}
                        </div>

                        <div className="ModalInfoWindow__header__body">
                            {body}
                        </div>
                    </div>

                    <div className="ModalInfoWindow__footer">
                        <ButtonGroup fluid={true}>
                            <Button
                                type="secondary"
                                size="lg"
                                label={cancelText}
                                onClick={handleShowDelay}
                            />
                            {onAction && (
                                <Button
                                    type="primary"
                                    size="lg"
                                    label={actionText}
                                    onClick={onAction}
                                />
                            )}
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </>
    );
};

ModalInfoWindow.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    show: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(['success', 'warning', 'error']),
    icon: PropTypes.any,
    body: PropTypes.string,
    onCancel: PropTypes.func,
};

ModalInfoWindow.defaultProps = {
    className: undefined,
    show: false,
    title: 'Default Title',
    type: 'warning',
    icon: faRocket,
    body: 'Example text...',
    onAction: undefined,
    onCancel: undefined,
    actionText: 'Accept',
    cancelText: 'Cancel',
};
