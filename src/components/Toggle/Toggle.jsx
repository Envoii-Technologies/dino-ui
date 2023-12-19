import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';

import { useToggle } from './useToggle';

export const Toggle = ({ className, checked: controlledChecked, ...props }) => {

  const {
    toggleRef,
    checkboxRef,
    checked,
    handleToggle,
    name,
    title,
    subtitle,
    disabled,
    value,
  } = useToggle({ ...props, controlledChecked });

  return (
    <div className={`Toggle ${ className || '' }`}>
      <input
        ref={checkboxRef}
        name={name}
        className="Toggle__checkbox"
        type="checkbox"
        defaultChecked={value}
        checked={checked}
        disabled={disabled}
        value={value}
        {...props}
      />
      <span
       ref={toggleRef}
       onClick={handleToggle}
       className={checked ? 'Toggle__switch toggled' : 'Toggle__switch'}
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
