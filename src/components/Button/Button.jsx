import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export const Button = ({
    className,
    isDisabled,
    iconLeft,
    iconRight,
    label,
    status,
	type,
	size,
	onClick,
    ...props
}) => {
    return (
        <button
            className={`Button 
			${className !== undefined ? className : ''}
			${size}
			${type === "primary" ? 'primary' : ''}
			${type === "secondary" ? 'secondary' : ''}
			${type === "tertiary" ? 'tertiary' : ''}
			${type === "link" ? 'link' : ''}
			${!label ? 'icon' : ''}
			`}
            disabled={isDisabled}
			onClick={onClick}
            {...props}
        >
            {iconLeft && (
                <FontAwesomeIcon
                    className="Button__icon--left"
                    icon={iconLeft}
                />
            )}
            {status !== 'none' && (
                <div className={`Button__status ${status}`}></div>
            )}
            {label && <div className="Button__label">{label}</div>}

            {iconRight && (
                <FontAwesomeIcon
                    className="Button__icon--right"
                    icon={iconRight}
                />
            )}
        </button>
    );
};

Button.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Is button disabled?
     */
    isDisabled: PropTypes.bool,
    /**
     * Button label text
     */
    label: PropTypes.string,
    /**
     * Left Icon (used for only-icon-button as icon)
     */
    iconLeft: PropTypes.any,
    /**
     * Right Icon
     */
    iconRight: PropTypes.any,
    /**
     * status Dot
     */
    status: PropTypes.oneOf(['none', 'idle', 'success', 'warning', 'error']),
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
	size: PropTypes.oneOf(['md', 'lg']),
};

Button.defaultProps = {
    className: undefined,
    isDisabled: false,
    label: '',
    iconLeft: null,
    iconRight: null,
    status: 'none',
    type: "primary",
	size: "md",
};
