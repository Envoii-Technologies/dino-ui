import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPen } from '@fortawesome/free-solid-svg-icons';

import './StepTitleInput.scss';

export const StepTitleInput = ({ className, title, onChangeTitle, ...props }) => {
    const [editMode, setEditMode] = useState(false);
    const [content, setContent] = useState(title);
    const [width, setWidth] = useState(0);

    const span = useRef();

    useEffect(() => {
        setContent(title)
    }, [title])

    useEffect(() => {
        if (span?.current)
		{
            setWidth(span.current.offsetWidth * 1.7);
        }
    }, [content, editMode]);

    const changeHandler = (e) => {
        setContent(e.target.value);
        onChangeTitle(e)
    };

    return (
        <div
            className={`StepTitleInput ${
                className !== undefined ? className : ''
            }`}
        >
            {editMode ? (
                <>
                    <div className="StepTitleInput__editor">
                        <div className="StepTitleInput__editor__wrapper">
                            <span className="StepTitleInput__editor__wrapper__hide" ref={span}>
                                {content}
                            </span>
                            <input
                                type="text"
								className="StepTitleInput__editor__wrapper__input" 
                                name="name"
                                style={{ width }}
								value={content}
                                onChange={(e) => changeHandler(e)}
                            />
                        </div>
                        <button className="StepTitleInput__editor__button" onClick={() => setEditMode(false)}>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="StepTitleInput__text">
                        {content}&nbsp;
                        <button
                            className="StepTitleInput__text__button"
                            onClick={() => setEditMode(true)}
                        >
                            <FontAwesomeIcon icon={faPen} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

StepTitleInput.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

StepTitleInput.defaultProps = {
    className: undefined,
    title: '',
};
