import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import './SelectBox.scss';

export const SelectBox = ({
    className,
    options,
	defaultValue,
    value,
    label,
    multi,
    disabled,
    searchable,
	onSelect,
    ...props
}) => {

	const handleOnChange = (choice) =>
	{
		onSelect(choice);
	}

    return (
        <div
            className={`SelectBox ${className !== undefined ? className : ''}`}
        >
            <>
                <label className="SelectBox__label">{label}</label>
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
                    defaultValue={defaultValue}
                />
            </>
        </div>
    );
};

SelectBox.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    options: PropTypes.array,
    label: PropTypes.string,
    /**
     * Can select multiple elements?
     */
    multi: PropTypes.bool,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
	defaultValue: PropTypes.any
};

SelectBox.defaultProps = {
    className: undefined,
    options: undefined,
    label: 'Label',
    multi: false,
    disabled: false,
    searchable: false,
	defaultValue: undefined,
};
