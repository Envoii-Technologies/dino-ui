import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { PopOver } from '../PopOver/PopOver';

export const Input = ({
    className,
    name,
    label,
    hint,
    tooltipText,
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
                    {metaLabel && metaPosition === 'left' && (
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
                    <div className='Input__wrapper__input'>
                        <input
                            type={
                                (type === 'text' && 'text') ||
                                (type === 'password' && 'password')
                            }
                            className="Input__wrapper__input__main"
                            placeholder={placeholder}
                            disabled={disabled}
                            autoFocus={autoFocus}
                            {...props}
                        />
                        {
                            tooltipText && (
                               <PopOver className='Input__wrapper__input__help' content={tooltipText} position="bottom-center">
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                </PopOver>
                            )
                        }
                        
                    </div>
                    {metaLabel && metaPosition === 'right' && (
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
