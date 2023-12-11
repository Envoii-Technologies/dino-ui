import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { Divider, Button, Text, ProgressBar } from '../../';
import {
    faCheck,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './CardViewerFooter.scss';

export const CardViewerFooter = ({
    className,
    onFinish,
    initialStepIndex,
    onChangeStep,
    stepsAmount,
    ...props
}) => {
    const [stepIndex, setStepIndex] = useState(initialStepIndex);

    useEffect(() => {
        onChangeStep(stepIndex);
    }, [stepIndex]);

    function getCurrentStepProgress(partialValue, totalValue) {
        if (totalValue === 0) {
            throw new Error("Total value cannot be 0.");
        }

        const percentage = (partialValue / totalValue) * 100;
        return percentage;
    }

    const handleStepChange = (newStep) => {
        setStepIndex(newStep);
    };

    const handleOnPrev = () => {
        handleStepChange(stepIndex - 1);
    };

    const handleOnNext = () => {
        handleStepChange(stepIndex + 1);
    };

    const handleOnFinish = () => {
        onFinish();
    };

    const { t } = useTranslation();

    const stepPositionElement = (
        <Text size="xs">
            {stepIndex + 1} {t('CardViewer.of')} {stepsAmount}
        </Text>
    );

    const isFirstStep = stepIndex === 0;
    const isLastStep = stepIndex + 1 === stepsAmount;
    const isSingleStep = stepsAmount === 1;

    return (
        <div className={`CardViewerFooter ${className || ''}`}>
            <Divider />
            <div className={`CardViewerFooter__menu--mobile ${isSingleStep ? 'single' : ''}`}>
                {
                    !isSingleStep &&
                    (
                        <>
                            <Button
                                type="secondary"
                                iconLeft={faChevronLeft}
                                disabled={isFirstStep}
                                onClick={handleOnPrev}
                            />
                            <div className="CardViewerFooter__menu--mobile__progress">
                                {stepPositionElement}
                            </div>
                        </>
                    )
                }

                {
                    isLastStep ? (
                        <Button
                            type="primary"
                            iconRight={faCheck}
                            onClick={handleOnFinish}
                        />
                    ) : (
                        <Button
                            type="secondary"
                            iconRight={faChevronRight}
                            onClick={handleOnNext}
                        />
                    )
                }
            </div>
            <div className={`CardViewerFooter__menu--desktop ${isSingleStep ? 'single' : ''}`}>
                {
                    !isSingleStep &&
                    (
                        <>
                            <Button
                                type="secondary"
                                label={t('CardViewer.buttons.previous')}
                                iconLeft={faChevronLeft}
                                disabled={isFirstStep}
                                onClick={handleOnPrev}
                            />
                            <div className="CardViewerFooter__menu--desktop__progress">
                                <ProgressBar progress={getCurrentStepProgress(stepIndex + 1, stepsAmount)} />
                                {stepPositionElement}
                            </div></>
                    )
                }

                {
                    isLastStep ? (
                        <Button
                            type="primary"
                            label={t('CardViewer.buttons.finish')}
                            onClick={handleOnFinish}
                        />
                    ) : (
                        <Button
                            type="secondary"
                            label={t('CardViewer.buttons.next')}
                            iconRight={faChevronRight}
                            onClick={handleOnNext}
                        />
                    )
                }
            </div>
        </div>
    );
};

CardViewerFooter.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    onFinish: PropTypes.func,
    onChangeStep: PropTypes.func,
    initialStepIndex: PropTypes.number,
    stepsAmount: PropTypes.number,
};

CardViewerFooter.defaultProps = {
    className: undefined,
    onFinish: () => { },
    onChangeStep: () => { },
    initialStepIndex: 0,
    stepsAmount: 1,
};
