import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Input = ({
    className,
    name,
    label,
    hint,
    placeholder,
    disabled,
    error,
    icon,
    type,
    metaLabel,
    metaPosition,
    autoFocus,
    ...props
}) => {
    return (
        <>
            <div
                className={`Input ${className !== undefined ? className : ''}`}
            >
                {label && (
                    <label className="Input__label" htmlFor={name}>
                        {label}
                    </label>
                )}
                <div
                    className={`Input__wrapper ${disabled ? 'disabled' : ''} ${
                        error ? 'error' : ''
                    }`}
                >
					{metaLabel && metaPosition === "left" && (
                        <div className="Input__wrapper__input__metaLabel left">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                    {icon && (
                        <FontAwesomeIcon
                            className="Input__wrapper__icon"
                            icon={icon}
                        />
                    )}
                    <input
                        type={ type === "text" && "text" || type === "password" && "password"}
                        className="Input__wrapper__input"
                        placeholder={placeholder}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        {...props}
                    />
					{metaLabel && metaPosition === "right" && (
                        <div className="Input__wrapper__input__metaLabel right">
                            <span>{metaLabel}</span>
                        </div>
                    )}
                </div>

                {hint && <div className="Input__hint">{hint}</div>}
                {error && <div className="Input__error">{error}</div>}
            </div>
        </>
    );
};

Input.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.any,
    type: PropTypes.oneOf(['text', 'password']),
    metaLabel: PropTypes.string,
    metaPosition: PropTypes.oneOf(['left', 'right']),
};

Input.defaultProps = {
    className: undefined,
    label: undefined,
    hint: undefined,
    name: '',
    placeholder: undefined,
    icon: undefined,
    type: 'text',
    metaLabel: undefined,
    metaPosition: 'left',
};
