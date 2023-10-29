import { useEffect, useState } from 'react';
import ObjectId from 'bson-objectid';
import {
    Container,
    Grid,
    Row,
    Column,
    StepList,
    StepContent,
} from './../../';
import { insertIntoArray } from '../../utils';

export const StepsTab = ({ stepsData, onChangeData }) => {
    const [activeStep, setActiveStep] = useState(stepsData[0]);
    const [stepsDataContent, setStepsDataContent] = useState(stepsData);
    const [activeStepPosition, setActiveStepPosition ] = useState(0);

    useEffect(() => {
        const indexPosition = stepsDataContent.findIndex(step => step._id === activeStep._id);
        setActiveStepPosition(indexPosition)
    }, [stepsDataContent])

    useEffect(() => {
        onChangeData(stepsDataContent);
    }, [stepsDataContent]);

    const handleStepChange = (id) => {
        const selectedStep = stepsDataContent.find((step) => step._id === id);

        setActiveStep(selectedStep);
    };

    const handleStepContentChange = (data) => {
        const updatedSteps = stepsDataContent.map((step) =>
            step._id === activeStep._id ? { ...step, ...data } : step
        );
        setStepsDataContent(updatedSteps);
    };

    const handleAddStep = () => {
        const newStep = {
            _id: ObjectId(),
            name: `Neuer Schritt ${stepsDataContent.length + 1}`,
            description: "Hello World",
            pos: stepsDataContent.length + 1
        };
        setStepsDataContent((prev) => [...prev, newStep]);
        setActiveStep(newStep);
    };

    const handleDeleteStep = (id) => {
        const updatedSteps = stepsDataContent.filter((step) => step._id !== id);
        setStepsDataContent(updatedSteps);
        setActiveStep(updatedSteps[0]);
    };

    const handleDuplicateStep = (id) => {
        const selectedStep = stepsDataContent.find((step) => step._id === id);
        const newStep = {
            ...selectedStep,
            name: `${selectedStep.name} (Kopie)`,
            _id: ObjectId(),
        };
        const currentIndex = stepsDataContent.findIndex((step) => step._id === id);
        const updatedSteps = insertIntoArray(
            stepsDataContent,
            currentIndex + 1,
            newStep
        );
        setStepsDataContent(updatedSteps);
        setActiveStep(newStep);
    };

    const stepIds = stepsDataContent.map((step) => ({ _id: step._id, name: step.name }));

    return (
        <Grid>
            <Row>
                <Column xlSpan={4}>
                    {stepIds.length > 0 && (
                        <Container>
                            <StepList
                                stepsData={stepIds}
                                initialActiveStep={activeStep._id}
                                onChangeActiveStep={handleStepChange}
                                onAddStep={handleAddStep}
                            />
                        </Container>
                    )}
                </Column>
                <Column xlSpan={8}>
                    <Container>
                        <StepContent
                            stepData={activeStep}
                            stepPosition={activeStepPosition}
                            onStepChange={handleStepContentChange}
                            onAddStep={handleAddStep}
                            onDuplicateStep={handleDuplicateStep}
                            onDeleteStep={handleDeleteStep}
                        />
                    </Container>
                </Column>
            </Row>
        </Grid>
    );
};
