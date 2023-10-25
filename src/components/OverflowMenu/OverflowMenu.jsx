import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './OverflowMenu.scss';
import { Button } from '../Button';
import {
    faChevronUp,
    faMinus,
    faP,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { OverflowMenuButton } from './OverflowMenuButton';

export const OverflowMenu = ({
    className,
    content,
    header,
    small,
    shortcuts,
    anchor,
    label,
    buttonType,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const handleClick = () => {
        if (isVisible === true) {
            handleShowDelay();
        } else {
            setIsVisible(true);
        }
    };

    const handleShowDelay = () => {
        setFadeOut(true);

        setTimeout(() => {
            setIsVisible(false);
            setFadeOut(false);
        }, 500);
    };

    return (
        <div
            className={`OverflowMenu 
                ${className !== undefined ? className : ''}
                ${small ? 'small' : ''}
            `}
            onClick={() => handleClick()}
        >
            <div
                className={`OverflowMenu__trigger ${
                    isVisible ? 'open' : 'closed'
                }`}
            >
                <Button
                    label={label}
                    type={buttonType}
                    iconRight={isVisible ? faMinus : faPlus}
                    isDisabled={content.length < 1 ? true : false}
                />
            </div>
            {isVisible && (
                <div
                    className={`OverflowMenu__content ${
                        shortcuts ? 'shortcuts' : ''
                    } anchor__${anchor} ${isVisible ? 'open' : ''} ${
                        fadeOut ? 'closed' : ''
                    }`}
                >
                    <div className="OverflowMenu__content--inner">
                        {header && (
                            <div className="OverflowMenu__content--inner__header">
                                {header}
                            </div>
                        )}
                        {content.map((menu, i) => (
                            <nav key={i} className="OverflowMenu__content--inner__items">
                                {menu.map((item, j) => (
                                    <OverflowMenuButton
                                        key={j}
                                        label={item.title}
                                        icon={item.icon}
                                        onClick={item.onClick}
                                        isDisabled={item.disabled}
                                        showShortcut={shortcuts}
                                    />
                                ))}
                            </nav>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

OverflowMenu.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    anchor: PropTypes.oneOf([
        'above-left',
        'above-right',
        'below-left',
        'below-right',
    ]),
    label: PropTypes.string,
    shortcuts: PropTypes.bool,
    content: PropTypes.array,
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
};

OverflowMenu.defaultProps = {
    className: undefined,
    anchor: 'below-left',
    label: 'Button',
    shortcuts: true,
    content: [],
    buttonType: 'tertiary',
};
