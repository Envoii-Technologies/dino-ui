import React, { useState, useRef, useEffect } from 'react';

export const useToggle = ({
    value,
    name,
    title,
    subtitle,
    checked: controlledChecked,
    onChange,
    disabled,
}) => {
    const toggle = useRef();
    const checkbox = useRef();

    const [localChecked, setLocalChecked] = useState(
        controlledChecked || false
    );

    useEffect(() => {
        setLocalChecked(controlledChecked || false);
    }, [controlledChecked]);

    function handleToggle() {
        if (onChange) onChange();
        toggle.current.classList.toggle('toggled');
        checkbox.current.checked = !localChecked;

        setLocalChecked(!localChecked);
    }

    return {
        toggleRef: toggle,
        checkboxRef: checkbox,
        checked: controlledChecked !== undefined ? controlledChecked : localChecked,
        handleToggle,
        name,
        title,
        subtitle,
        disabled,
        value: value || false,
    };
};
