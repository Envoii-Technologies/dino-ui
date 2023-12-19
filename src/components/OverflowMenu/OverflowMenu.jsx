import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './OverflowMenu.scss';
import { Button } from '../Button';
import {
    faEllipsisV,
    faMinus,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { OverflowMenuButton } from './OverflowMenuButton';

export const OverflowMenu = ({
    className,
    content,
    header,
    icon,
    small,
    shortcuts,
    ellipsis,
    anchor,
    label,
    disabled,
    buttonType,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        // Step 1: Add event listener to handle outside clicks
        const handleOutsideClick = (event) => {
            if (isVisible && menuRef.current && !menuRef.current.contains(event.target)) {
                // Step 3: Check if the click is outside the menu
                handleShowDelay();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            // Clean up the event listener
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isVisible]); // Only re-run if isVisible changes

    const handleClick = () => {
        setIsVisible(!isVisible);
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
                ${className || ''}
                ${small ? 'small' : ''}
            `}
            ref={menuRef}
            onClick={() => handleClick()}
            {...props}
        >
            <div
                className={`OverflowMenu__trigger ${
                    isVisible ? 'open' : 'closed'
                }`}
            >
                {(icon && !ellipsis) && (
                    <Button
                        type="secondary"
                        iconLeft={icon}
                        isDisabled={content.length < 1 ? true : false}
                    />
                )}
                {(ellipsis && !icon) && (
                    <Button
                        type="secondary"
                        iconLeft={faEllipsisV}
                        isDisabled={content.length < 1 ? true : false}
                    />
                )}
                {!icon && !ellipsis && (
                    <Button
                        label={label}
                        type={buttonType}
                        iconRight={isVisible ? faMinus : faPlus}
                        isDisabled={content.length < 1 ? true : false}
                    />
                )}
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
                            <nav
                                key={i}
                                className="OverflowMenu__content--inner__items"
                            >
                                {menu.map((item, j) => (
                                    <OverflowMenuButton
                                        key={j}
                                        label={item.title}
                                        icon={item.icon}
                                        onClick={item.onClick}
                                        isDisabled={item.disabled}
                                        isDangerous={item.dangerous}
                                        shortcut={item.shortcut}
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
    /**
     * The label to be displayed on the trigger button.
     */
    label: PropTypes.string,
    /**
     * Whether to use an ellipsis icon as the trigger button.
     */
    ellipsis: PropTypes.bool,
    /**
     * Whether to use a smaller variant of the menu.
     */
    small: PropTypes.bool,
    /**
     * Whether to display shortcuts in the menu.
     */
    shortcuts: PropTypes.bool,
    /**
     * The anchor position for the menu.
     */
    anchor: PropTypes.oneOf([
        'above-left',
        'above-right',
        'below-left',
        'below-right',
    ]),
    /**
     * An array of menu items to be displayed.
     */
    content: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                icon: PropTypes.any,
                onClick: PropTypes.func,
                disabled: PropTypes.bool,
                dangerous: PropTypes.bool,
                shortcut: PropTypes.string,
            })
        )
    ),
    /**
     * The type of trigger button.
     */
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
    icon: PropTypes.any,
};

OverflowMenu.defaultProps = {
    className: undefined,
    label: 'Button',
    ellipsis: false,
    small: false,
    shortcuts: true,
    icon: undefined,
    anchor: 'below-left',
    content: [],
    buttonType: 'tertiary',
};
