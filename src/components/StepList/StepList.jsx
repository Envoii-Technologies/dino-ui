import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './StepList.scss';
import { faDisplay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StepList = ({
    className,
    steps,
    onChangeActiveStep,
    initialActiveStep,
    onAddStep,
    ...props
}) => {
    const [currentStep, setCurrentStep] = useState(initialActiveStep);

    useEffect(() => {}, [currentStep]);

    const handleAddStep = () => {
        onAddStep();
    };

    const handleChangeActiveStep = (i) =>
    {
        setCurrentStep(i);
        onChangeActiveStep(i)
    }

    return (
        <div className={`StepList ${className !== undefined ? className : ''}`}>
            <ul className="StepList__items">
                {[1, 2].map((items, i) => (
                    <>
                        <li className="StepList__items__item">
                            <button className="StepList__items__item__wrapper" onClick={() => handleChangeActiveStep(i)}>
                                <div
                                    className={`StepList__items__item__wrapper__icon ${
                                        currentStep === i ? 'active' : ''
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faDisplay} />
                                </div>
                                <div
                                    className={`StepList__items__item__wrapper__title ${
                                        currentStep === i ? 'active' : ''
                                    }`}
                                >
                                    Kupplungskorb und Federn
                                </div>
                            </button>
                        </li>
                        <li className="StepList__items__divider">
                            <div className="StepList__items__divider__line"></div>
                        </li>
                    </>
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
    initialActiveStep: PropTypes.number,
    onAddStep: PropTypes.func,
    onChangeActiveStep: PropTypes.func,
};

StepList.defaultProps = {
    className: undefined,
    initialActiveStep: 0,
    onAddStep: undefined,
    onChangeActiveStep: undefined,
};
