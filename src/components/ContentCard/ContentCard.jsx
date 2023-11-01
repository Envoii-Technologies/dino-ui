import React from 'react';
import PropTypes from 'prop-types';
import './ContentCard.scss';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faFile } from '@fortawesome/free-solid-svg-icons';

export const ContentCard = ({
    className,
    children,
    icon,
    title,
    actionIcon,
    onAction,
    ...props
}) => {
    const handleAction = () => {
        onAction();
    };

    return (
        <div className={`ContentCard ${className || ''}`}>
            {title && (
                <div className="ContentCard__header">
                    <div className="ContentCard__header__title">
                        <div className="ContentCard__header__title__icon">
                            <FontAwesomeIcon icon={faFile} />
                        </div>
                        <div className="ContentCard__header__title__text">
                            {title}
                        </div>
                    </div>
                    <Button
                        type="secondary"
                        iconLeft={actionIcon}
                        onClick={() => handleAction()}
                    />
                </div>
            )}
            <div className="ContentCard__body">{children}</div>
        </div>
    );
};

ContentCard.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    onAction: PropTypes.func,
    title: PropTypes.string,
};

ContentCard.defaultProps = {
    className: undefined,
    actionIcon: faCancel,
    onAction: undefined,
    title: undefined,
};
