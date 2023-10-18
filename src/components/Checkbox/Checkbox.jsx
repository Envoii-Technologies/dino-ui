import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Checkbox = ({
    className,
    onChange,
    value,
    name,
    title,
    subtitle,
    checked: controlledChecked,
    disabled,
    ...props
}) => {
    const toggle = useRef();
    const checkbox = useRef();

    // Use local state for checked
    const [localChecked, setLocalChecked] = useState(
        controlledChecked || false
    );

    // Update the local state when controlledChecked prop changes
    useEffect(() => {
        setLocalChecked(controlledChecked || false);
    }, [controlledChecked]);

    function handleToggle() {
        if (props.onChange) props.onChange();
        toggle.current.classList.toggle('toggled');
        checkbox.current.checked = !localChecked;

        // Update the local state
        setLocalChecked(!localChecked);
    }

    return (
        <div className="Checkbox">
            <input
                ref={checkbox}
                name={props.name}
                className="Checkbox__checkbox"
                type="checkbox"
                defaultChecked={props.value}
                checked={
                    controlledChecked !== undefined
                        ? controlledChecked
                        : localChecked
                }
                disabled={disabled}
                value={props.value || false}
                {...props}
            />
            <span
                ref={toggle}
                onClick={handleToggle}
                className={
                    (
                        controlledChecked !== undefined
                            ? controlledChecked
                            : localChecked
                    )
                        ? 'Checkbox__switch toggled'
                        : 'Checkbox__switch'
                }
            >
                <span className="Checkbox__switch__toggler">
					<FontAwesomeIcon icon={faCheck}/>
				</span>
            </span>
            {title && (
                <div className="Checkbox__text">
                    <div className="Checkbox__text__title">{title}</div>
                    <div className="Checkbox__text__info">{subtitle}</div>
                </div>
            )}
        </div>
    );
};

Checkbox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * A callback function that is invoked when the toggle state changes.
     */
    onChange: PropTypes.func,
    /**
     * The value associated with the Toggle component.
     */
    value: PropTypes.string,
    /**
     * The name attribute for the Toggle component's input element.
     */
    name: PropTypes.string,
    /**
     * The title text displayed alongside the toggle.
     */
    title: PropTypes.string,
    /**
     * The subtitle text displayed below the title.
     */
    subtitle: PropTypes.string,
    /**
     * The checked state of the Toggle component. Use this prop to control the checked state from outside.
     */
    checked: PropTypes.bool,
    /**
     * Disables the Toggle component when set to `true`.
     */
    disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
    className: undefined,
    onChange: undefined,
    value: undefined,
    name: undefined,
    title: undefined,
    subtitle: undefined,
    checked: false,
    disabled: false,
};
