import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './StepList.scss';
import { faDisplay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useStepList } from './useStepList';

export const StepList = ({
    className,
    stepsData,
    initialActiveStep,
    onAddStep,
    onChangeActiveStep,
    position,
    ...props
}) => {
    const { currentStep, stepList, handleAddStep, handleChangeActiveStep } =
        useStepList(
            stepsData,
            initialActiveStep,
            onAddStep,
            onChangeActiveStep
        );

    return (
        <div className={`StepList ${className !== undefined ? className : ''}`}>
            <ul className="StepList__items">
                {stepList.map((step, i) => (
                    <React.Fragment key={step._id}>
                        <li className="StepList__items__item">
                            <button
                                className="StepList__items__item__wrapper"
                                onClick={() => handleChangeActiveStep(step._id)}
                            >
                                <div
                                    className={`StepList__items__item__wrapper__icon ${
                                        currentStep === step._id ? 'active' : ''
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>
                                <div
                                    className={`StepList__items__item__wrapper__title ${
                                        currentStep === step._id ? 'active' : ''
                                    }`}
                                >
                                    {step.name.length === 0 ? `Schritt ${i + 1}` : step.name}
                                </div>
                            </button>
                        </li>
                        <li className="StepList__items__divider">
                            <div className="StepList__items__divider__line"></div>
                        </li>
                    </React.Fragment>
                ))}

                <li className="StepList__items__create">
                    <button
                        className="StepList__items__create__button"
                        onClick={() => handleAddStep()}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </li>
            </ul>
        </div>
    );
};

StepList.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Array of step data, each with _id and name properties.
     */
    stepsData: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
    /**
     * Initial active step _id.
     */
    initialActiveStep: PropTypes.string,
    /**
     * Function called when adding a step.
     */
    onAddStep: PropTypes.func,
    /**
     * Function called when changing the active step.
     */
    onChangeActiveStep: PropTypes.func,
};

StepList.defaultProps = {
    className: undefined,
    stepsData: [],
    initialActiveStep: undefined,
    onAddStep: undefined,
    onChangeActiveStep: undefined,
};
