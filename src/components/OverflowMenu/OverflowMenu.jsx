import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './OverflowMenu.scss';

export const OverflowMenu = ({
    className,
    children,
    content,
    anchor,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
            setIsVisible(!isVisible);
    };

    return (
        <div
            className={`OverflowMenu ${
                className !== undefined ? className : ''
            }`}
            onClick={() => handleClick()}
        >
            <div className="OverflowMenu__trigger">{children}</div>
            {isVisible && (
                <div className={`OverflowMenu__content anchor__${anchor}`}>
                    <div className="OverflowMenu__content--inner">
                        {content}
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
        'left-top',
        'left-center',
        'left-bottom',
        'left-top-inner',
        'left-center-inner',
        'left-bottom-inner',
        'right-top',
        'right-center',
        'right-bottom',
        'right-top-inner',
        'right-center-inner',
        'right-bottom-inner',
    ]),
};

OverflowMenu.defaultProps = {
    className: undefined,
    anchor: 'left-top-inner',
};
