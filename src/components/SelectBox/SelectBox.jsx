import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import './SelectBox.scss';
import ObjectID from 'bson-objectid';

export const SelectBox = ({
    className,
    defaultValue,
    defaultOptions,
    label,
    multi,
    disabled,
    searchable,
    creatable,
    onSelect,
    ...props
}) => {
    const [options, setOptions] = useState(defaultOptions);
    const [value, setValue] = useState(defaultValue);

    const handleOnChange = (choice) => {
        onSelect(choice);
        setValue(choice);
    };

    const handleCreateTag = (inputValue) => {
        const newOption = createOption(inputValue);
        setOptions((prev) => [...prev, newOption]);
        setValue(newOption);
    };

    const createOption = (label) => ({
        label,
        value: ObjectID().toHexString(),
    });

    return (
        <div
            className={`SelectBox ${className !== undefined ? className : ''}`}
        >
            <>
                <label className="SelectBox__label">{label}</label>
                {creatable ? (
                    <CreatableSelect
                        className="SelectBox__Selector"
                        classNamePrefix="SelectBox__Selector"
                        isDisabled={disabled}
                        isMulti={multi}
                        isSearchable={searchable}
                        isClearable={false}
                        blurInputOnSelect={true}
                        onChange={(choice) => handleOnChange(choice)}
                        onCreateOption={handleCreateTag}
                        captureMenuScroll={true}
                        options={options}
                        value={value}
                    />
                ) : (
                    <Select
                        className="SelectBox__Selector"
                        classNamePrefix="SelectBox__Selector"
                        isDisabled={disabled}
                        isMulti={multi}
                        isSearchable={searchable}
                        isClearable={false}
                        blurInputOnSelect={true}
                        onChange={(choice) => handleOnChange(choice)}
                        captureMenuScroll={true}
                        options={options}
                        value={value}
                    />
                )}
            </>
        </div>
    );
};

SelectBox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Array of options for the select box.
     */
    options: PropTypes.array,
    /**
     * Label for the select box.
     */
    label: PropTypes.string,
    /**
     * Can select multiple elements?
     */
    multi: PropTypes.bool,
    /**
     * Disables the select box when set to true.
     */
    disabled: PropTypes.bool,
    /**
     * Enables searching for options.
     */
    searchable: PropTypes.bool,
    creatable: PropTypes.bool,
    /**
     * The default value for the select box.
     */
    defaultValue: PropTypes.any,
    /**
     * Callback function when an option is selected.
     */
    onSelect: PropTypes.func,
};

SelectBox.defaultProps = {
    className: undefined,
    options: undefined,
    label: 'Label',
    multi: false,
    disabled: false,
    creatable: false,
    searchable: false,
    defaultValue: undefined,
    onSelect: () => {},
};
