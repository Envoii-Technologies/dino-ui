import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Dot } from '../Dot';

export const Button = ({
    className,
    isDisabled,
    iconLeft,
    iconRight,
    label,
    status,
	type,
    fluid,
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
            ${fluid ? 'fluid': ''}
			${!label ? 'icon' : ''}
			`}
            disabled={isDisabled ? 'disabled' : false}
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
                <Dot state={status}/>
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
    status: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
    fluid: PropTypes.bool,
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
    fluid: false,
};
