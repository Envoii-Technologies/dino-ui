import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    TextArea,
    Button,
    FileUploader,
    StepTitleInput,
    OverflowMenu,
} from './../../';

import './StepContent.scss';
import {
    faCopy,
    faEllipsisV,
    faPlus, 
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

export const StepContent = ({
    className,
    stepData,
    onAddStep,
    onStepChange,
    onDuplicateStep,
    onDeleteStep,
    ...props
}) => {
    const stepDataObject =
    {
        name: stepData.name,
        position: stepData.pos,
        description: stepData.description,
        media: [],
        _id: stepData._id,
    }

    const [stepSettings, setStepSettings] = useState(stepDataObject);

    const handleChangeText = (e) => {
        const value = e.target.value;

        setStepSettings({
            ...stepSettings,
            [e.target.name]: value,
        });
        onStepChange(stepSettings);
    };

    const handleAddFile = (file) => {
        console.log(file);

        const updateMedia = [...stepSettings.media];

        updateMedia.push(file);

        setStepSettings((prev) => ({ ...prev, media: [...updateMedia] }));
    };

    useEffect(() => {
        setStepSettings(stepDataObject)
    }, [stepData]);

    useEffect(() => {
        onStepChange(stepSettings);
    }, [stepSettings]);

    return (
        <div
            className={`StepContent ${
                className !== undefined ? className : ''
            }`}
        >
            <div className="StepContent__header">
                <div className="StepContent__header__info">
                    <div className="StepContent__header__info__number">
                        Schritt {stepSettings.position}
                    </div>
                    <StepTitleInput
                        title={stepSettings.name}
                        onChangeTitle={(e) => handleChangeText(e)}
                    />
                </div>
                <OverflowMenu
                    anchor="below-right"
                    ellipsis={true}
                    label="Optionen"
                    content={[
                        [
                            {
                                title: 'Duplizieren',
                                icon: faCopy,
                                onClick: () => onDuplicateStep(stepDataObject._id),
                            },
                            {
                                title: 'Löschen',
                                icon: faTrash,
                                dangerous: true,
                                onClick: () => onDeleteStep(stepDataObject._id),
                            },
                        ],
                    ]}
                />
            </div>

            <TextArea
                placeholder="Beschreibung hinzufügen"
                name="description"
                defaultValue={stepSettings.description}
                onChange={(e) => handleChangeText(e)}
            />

            <FileUploader onUploaded={(file) => handleAddFile(file)} />

            <Button
                label="Schritt hinzufügen"
                size="lg"
                type="secondary"
                iconLeft={faPlus}
                fluid={true}
                onClick={onAddStep}
            />
        </div>
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
