import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './../Button';
import { useNotifications } from './NotificationContext';


import './Notification.scss';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NotificationBox = ({ className, children, id, options, ...props }) => {
    const { removeNotification, stopTimer, startTimer } = useNotifications();

    return (
        <div className={`
                NotificationBox ${className || ""}
                ${options?.type ? `type--${options.type}` : ''}
            `}
            onMouseEnter={() => stopTimer(id)} 
            onMouseLeave={() => startTimer(id)}
            {...props}
        >
            {
                options?.type && (
                    <div className={`NotificationBox__icon type--${options.type}`}>
                        <div className="NotificationBox__icon__outer">
                            <div className="NotificationBox__icon__outer__center">
                                <div className="NotificationBox__icon__outer__center__inner">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <Button
                className="NotificationBox__button"
                type="tertiary"
                iconLeft={faClose}
                onClick={() => removeNotification(id)}
            />
            <div className="NotificationBox__content">
                {children}
            </div>
        </div>
    )
}

NotificationBox.propTypes =
{
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

NotificationBox.defaultProps =
{
    className: undefined,
};
