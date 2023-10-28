import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './StepList.scss';
import { faDisplay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepList = ({
    className,
    stepsData,
    onChangeActiveStep,
    initialActiveStep,
    onAddStep,
    ...props
}) => {
    const [currentStep, setCurrentStep] = useState(initialActiveStep);
    const [stepList, setStepList] = useState(stepsData);

    useEffect(() => {
        setStepList(stepsData);
    }, [stepsData]);

    useEffect(() => {
        setCurrentStep(initialActiveStep);
    }, [initialActiveStep])

    const handleAddStep = () => {
        onAddStep();
    };

    const handleChangeActiveStep = (selection) =>
    {
        setCurrentStep(selection);
        onChangeActiveStep(selection);
    }

    return (
        <div className={`StepList ${className !== undefined ? className : ''}`}>
            <ul className="StepList__items">
                {stepList.map((step, i) => (
                    <React.Fragment key={step._id}>
                        <li className="StepList__items__item">
                            <button className="StepList__items__item__wrapper" onClick={() => handleChangeActiveStep(step._id)}>
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
                                    {step.name}
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
    initialActiveStep: PropTypes.string,
    onAddStep: PropTypes.func,
    onChangeActiveStep: PropTypes.func,
};

StepList.defaultProps = {
    className: undefined,
    initialActiveStep: undefined,
    onAddStep: undefined,
    onChangeActiveStep: undefined,
};
