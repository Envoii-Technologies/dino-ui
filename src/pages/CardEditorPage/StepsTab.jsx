import { useEffect, useState } from 'react';
import ObjectId from 'bson-objectid';
import {
    Button,
    Container,
    Input,
    ContentRow,
    Checkbox,
    SelectBox,
    TextArea,
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
    const [stepIds, setStepIds] = useState(undefined);

    useEffect(() => {
        const allInfos = handleGetStepsInfo(stepsDataContent);
        setStepIds(allInfos);
        onChangeData(stepsDataContent);
    }, [stepsDataContent]);

    const handleStepChange = (id) => {
        const selectedStep = stepsDataContent.filter((step) => step._id === id);

        setActiveStep(selectedStep[0]);
    };

    const handleGetStepsInfo = (steps) => {
        return steps.map((step) => {
            return { _id: step._id, name: step.name };
        });
    };

    const handleStepContentChange = (data) => {
        const newSteps = stepsDataContent.map((step) => {
            if (step._id === activeStep._id) {
                return { ...step, ...data };
            }
            return step;
        });

        setStepsDataContent(newSteps);
    };

    const handleAddStep = () => {
        // alert('ADD STEP!');

        const newStep = {
            _id: ObjectId(),
            name: "Neuer Schritt " + (stepsDataContent.length + 1),
            description: "Hello World"
        }

        setStepsDataContent(prev => ([...prev, newStep]));
    };

    const handleDeleteStep = (id) =>
    {
        const currentIndex = stepsDataContent.findIndex(x => x._id === id);

        if(currentIndex !== 0)
        {
            const stepsWithoutDeleted = stepsDataContent.filter((step) => step._id !== id);
            setStepsDataContent(stepsWithoutDeleted);
            setActiveStep(stepsDataContent[0]);
        }
    };

    const handleDuplicateStep = (id) =>
    {
        const selectedStep = stepsDataContent.filter((step) => step._id === id)[0];
        const currentIndex = stepsDataContent.findIndex(x => x._id === id);

        const newStep = {
            ...selectedStep,
            name: selectedStep.name + " (Kopie)",
            _id: ObjectId(),
        }

        const updatedSteps = insertIntoArray(stepsDataContent, currentIndex +1, newStep);

        setStepsDataContent(updatedSteps);
        setActiveStep(updatedSteps[currentIndex + 1]);
    }

    return (
        <Grid>
            <Row>
                <Column xlSpan={4}>
                    {stepIds && (
                        <Container>
                            <StepList
                                stepsData={stepIds}
                                onChangeActiveStep={(data) =>
                                    handleStepChange(data)
                                }
                                initialActiveStep={activeStep._id}
                                onAddStep={() => handleAddStep()}
                            />
                        </Container>
                    )}
                </Column>
                <Column xlSpan={8}>
                    <Container>
                        <StepContent
                            onStepChange={(data) =>
                                handleStepContentChange(data)
                            }
                            stepData={activeStep}
                            onAddStep={() => handleAddStep()}
                            onDuplicateStep={(data) => handleDuplicateStep(data)}
                            onDeleteStep={(data) => handleDeleteStep(data)}
                        />
                    </Container>
                </Column>
            </Row>
        </Grid>
    );
};
