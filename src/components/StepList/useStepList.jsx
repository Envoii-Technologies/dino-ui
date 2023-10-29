import { useEffect, useState } from 'react';

export const useStepList = (stepsData, initialActiveStep, onAddStep, onChangeActiveStep) => {
    const [currentStep, setCurrentStep] = useState(initialActiveStep);
    const [stepList, setStepList] = useState(stepsData);

    useEffect(() => {
        setStepList(stepsData);
    }, [stepsData]);

    useEffect(() => {
        setCurrentStep(initialActiveStep);
    }, [initialActiveStep]);

    const handleAddStep = () => {
        onAddStep();
    };

    const handleChangeActiveStep = (selection) => {
        setCurrentStep(selection);
        onChangeActiveStep(selection);
    };

    return {
        currentStep,
        stepList,
        handleAddStep,
        handleChangeActiveStep,
    };
};
