import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HelpIcon } from '../HelpIcon';

import './TextArea.scss';

export const TextArea = ({
    className,
    disabled,
    hint,
    error,
    label,
    tooltipText,
    placeholder,
    metaLabel,
    metaPosition,
    defaultValue,
	onChange,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue);
    const textAreaRef = useRef(null);

    useEffect(() => {
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height =
            textAreaRef.current.scrollHeight + 'px';
            
        setValue(defaultValue);
    }, [defaultValue, value]);

    const handleChange = (e) => {
        setValue(e.target.value);
		onChange(e);
    };

    return (
        <div className={`TextArea ${ className || '' }`}>
            {label && (
                <label className="TextArea__label" htmlFor={props.name}>
                    {label}
                </label>
            )}
            <div
                className={`TextArea__wrapper ${disabled ? 'disabled' : ''} ${
                    error ? 'error' : ''
                }`}
            >
                {metaLabel && metaPosition === 'left' && (
                    <div className="TextArea__wrapper__input__metaLabel left">
                        <span>{metaLabel}</span>
                    </div>
                )}
                <div className="TextArea__wrapper__input">
                    <textarea
                        className="TextArea__wrapper__input__main"
                        ref={textAreaRef}
                        placeholder={placeholder}
                        disabled={disabled}
                        rows="1"
                        name={props.name}
                        value={value}
						onChange={handleChange}
                        {...props}
                    />
                    {tooltipText && <HelpIcon helpText={tooltipText} />}
                </div>
                {metaLabel && metaPosition === 'right' && (
                    <div className="TextArea__wrapper__input__metaLabel right">
                        <span>{metaLabel}</span>
                    </div>
                )}
            </div>
            {hint && <div className="TextArea__hint">{hint}</div>}
            {error && <div className="TextArea__error">{error}</div>}
        </div>
    );
};

TextArea.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    tooltipText: PropTypes.node,
    metaLabel: PropTypes.string,
    defaultValue: PropTypes.string,
    metaPosition: PropTypes.oneOf(['left', 'right']),
    onChange: PropTypes.func,
};

TextArea.defaultProps = {
    className: undefined,
    label: undefined,
    disabled: false,
    hint: undefined,
    error: undefined,
    placeholder: undefined,
    tooltipText: undefined,
    defaultValue: undefined,
    metaLabel: undefined,
    metaPosition: 'left',
};
