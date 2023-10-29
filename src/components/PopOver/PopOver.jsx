import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './PopOver.scss';

export const PopOverPosition = {
    LEFT_TOP: 'left-top',
    LEFT_CENTER: 'left-center',
    LEFT_BOTTOM: 'left-bottom',
    TOP_LEFT: 'top-left',
    TOP_CENTER: 'top-center',
    TOP_RIGHT: 'top-right',
    RIGHT_TOP: 'right-top',
    RIGHT_CENTER: 'right-center',
    RIGHT_BOTTOM: 'right-bottom',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_CENTER: 'bottom-center',
    BOTTOM_RIGHT: 'bottom-right',
};

export const PopOver = ({
    className,
    children,
    content,
    position,
    openOnHover,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [adjustedPosition, setAdjustedPosition] = useState(position);
    const popoverRef = useRef(null);

    const handleMouseEnter = (e) => {
        e.stopPropagation();

        if (openOnHover) {
            setIsVisible(true);
        }
    };

    const handleMouseLeave = (e) => {
        e.stopPropagation();

        if (openOnHover) {
            setIsVisible(false);
        }
    };

    const handleClick = (e) => {
        e.stopPropagation();
        
        if (!openOnHover) {
            setIsVisible(!isVisible);
        }
    };

    const handleClickOutside = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('click', handleClickOutside);

            const rect = popoverRef.current.getBoundingClientRect();
            const viewportWidth =
                window.innerWidth || document.documentElement.clientWidth;
            const viewportHeight =
                window.innerHeight || document.documentElement.clientHeight;

            if (rect.right > viewportWidth) {
                setAdjustedPosition(PopOverPosition.LEFT_TOP);
            }

            setTimeout(() => {
                setIsVisible(false);
            }, 2500);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isVisible]);

    return (
        <div
            className={`PopOver ${adjustedPosition} ${
                openOnHover ? 'hoverable' : ''
            } ${className !== undefined ? className : ''}`}
            ref={popoverRef} // Ref to the popover div
        >
            <div className="PopOver__trigger">
                <div
                    onMouseEnter={(e) => handleMouseEnter(e)}
                    onMouseLeave={(e) => handleMouseLeave(e)}
                    onClick={(e) => handleClick(e)}
                >
                    {children}
                </div>
            </div>
            {isVisible && (
                <div className="PopOver__content">
                    <div className="PopOver__content--inner">{content}</div>
                </div>
            )}
        </div>
    );
};

PopOver.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * The content of the trigger element.
     */
    children: PropTypes.node,

    /**
     * The content to be displayed inside the popover.
     */
    content: PropTypes.node,

    /**
     * The positioning of the popover relative to the trigger element.
     * Choose from predefined positions:
     */
    position: PropTypes.oneOf(Object.values(PopOverPosition)),

    /**
     * Determines whether the popover opens on hover (true) or on click (false).
     */
    openOnHover: PropTypes.bool,
};

PopOver.defaultProps = {
    className: undefined,
    openOnHover: false,
    position: PopOverPosition.BOTTOM_CENTER,
    content: null,
};
