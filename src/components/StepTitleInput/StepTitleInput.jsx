import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPen } from '@fortawesome/free-solid-svg-icons';

import './StepTitleInput.scss';

export const StepTitleInput = ({ className, title, placeholder, onChangeTitle, ...props }) => {
    const [content, setContent] = useState(title);

    const changeHandler = (e) => {
        setContent(e.target.value);
        onChangeTitle(e)
    };

    useEffect(() => {
        setContent(title)
    }, [title])

    return (
        <div
            className={`StepTitleInput ${className || ''}`}
        >
            <input
                type="text"
                className="StepTitleInput__input"
                placeholder={placeholder}
                name="name"
                value={content}
                onChange={(e) => changeHandler(e)}
            />
        </div>
    )
}

StepTitleInput.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    title: PropTypes.string,
};

StepTitleInput.defaultProps = {
    className: undefined,
    title: '',
    placeholder: 'Schritt benennen'
};
