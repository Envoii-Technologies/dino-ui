import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    TextArea,
    Button,
    FileUploader,
    StepTitleInput,
    OverflowMenu,
    ButtonGroup,
    FileViewer,
} from './../../';

import './StepContent.scss';
import {
    faCopy,
    faPaperclip,
    faPlus,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

export const StepContent = ({
    className,
    stepPosition,
    stepData,
    onAddStep,
    onStepChange,
    onDuplicateStep,
    uploadParameters,
    onDeleteStep,
    ...props
}) => {
    const stepDataObject = {
        name: stepData.name,
        pos: stepData.pos,
        description: stepData.description,
        media: [],
        _id: stepData._id,
    };

    const [stepSettings, setStepSettings] = useState(stepDataObject);

    const handleChangeText = (e) => {
        const value = e.target.value;

        setStepSettings({
            ...stepSettings,
            [e.target.name]: value,
        });
        onStepChange(stepSettings);
    };

    useEffect(() => {
        setStepSettings(stepDataObject);
    }, [stepData]);

    useEffect(() => {
        onStepChange(stepSettings);
    }, [stepSettings]);

    return (
        <>
            <div
                className={`StepContent ${
                    className !== undefined ? className : ''
                }`}
            >
                <div className="StepContent__header">
                    <div className="StepContent__header__info">
                        <div className="StepContent__header__info__number">
                            Schritt {stepPosition + 1}
                        </div>
                        <StepTitleInput
                            title={stepSettings.name}
                            onChangeTitle={(e) => handleChangeText(e)}
                        />
                    </div>
                    <ButtonGroup>
                        <Button
                            type="secondary"
                            iconLeft={faCopy}
                            onClick={() => onDuplicateStep(stepDataObject._id)}
                        />
                        <Button
                            type="secondary"
                            className="delete"
                            iconLeft={faTrash}
                            onClick={() => onDeleteStep(stepDataObject._id)}
                            disabled={stepPosition === 0 ? true : false}
                        />
                    </ButtonGroup>
                </div>

                <TextArea
                    placeholder="Beschreibung hinzufügen"
                    name="description"
                    defaultValue={stepSettings.description}
                    onChange={(e) => handleChangeText(e)}
                />

                <FileViewer
                    uploadUrl="https://httpbin.org/post"
                    onUpload={(data) => console.log(data)}
                    onDelete={(data) => console.log(data)}
                />

                <Button
                    label="Schritt hinzufügen"
                    size="lg"
                    type="secondary"
                    iconLeft={faPlus}
                    fluid={true}
                    onClick={onAddStep}
                />
            </div>
        </>
    );
};

StepContent.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    onAddStep: PropTypes.func,
    onStepChange: PropTypes.func,
};

StepContent.defaultProps = {
    className: undefined,
    onAddStep: undefined,
    onStepChange: undefined,
};

{
    /* <FileUploader
                onUploaded={(file) => handleAddFile(file)}
                uploadParameters={uploadParameters}
            /> */
}

// const handleAddFile = (file) => {
//     console.log(file);

//     const updateMedia = [...stepSettings.media];

//     updateMedia.push(file._id);

//     setStepSettings((prev) => ({ ...prev, media: [...updateMedia] }));
// };
