import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';

export const Toggle = ({
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
  const [localChecked, setLocalChecked] = useState(controlledChecked || false);

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
    <div className="Toggle">
      <input
        ref={checkbox}
        name={props.name}
        className="Toggle__checkbox"
        type="checkbox"
        defaultChecked={props.value}
        checked={controlledChecked !== undefined ? controlledChecked : localChecked}
        disabled={disabled}
        value={props.value || false}
        {...props}
      />
      <span
        ref={toggle}
        onClick={handleToggle}
        className={
          (controlledChecked !== undefined ? controlledChecked : localChecked)
            ? 'Toggle__switch toggled'
            : 'Toggle__switch'
        }
      >
        <span className="Toggle__switch__toggler"></span>
      </span>
      {title && (
        <div className="Toggle__text">
          <div className="Toggle__text__title">{title}</div>
          <div className="Toggle__text__info">{subtitle}</div>
        </div>
      )}
    </div>
  );
};

Toggle.propTypes = {
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

Toggle.defaultProps = {
  className: undefined,
  onChange: undefined,
  value: undefined,
  name: undefined,
  title: undefined,
  subtitle: undefined,
  checked: false,
  disabled: false,
};
