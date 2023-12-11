import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { LoadingIndicator, Text, Heading, MediaGallery } from './../../';

import './CardViewerContent.scss';
import { useTranslation } from 'react-i18next';
import { CardViewerHeader } from './CardViewerHeader';
import { CardViewerFooter} from './CardViewerFooter';

export const CardViewerContent = ({ className, cardData, onClose, mediaUrl, ...props }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [currentStep, setCurrentStep] = useState(0);
	const [stepData, setStepData] = useState(undefined);

	useEffect(() => {
		if(cardData?.steps.length > 0)
		{
			setStepData(cardData?.steps[currentStep]);
			setIsLoading(false);
		}
	}, cardData);
	
	useEffect(() => {
		setStepData(cardData?.steps[currentStep]);

	}, [currentStep])

	const { t } = useTranslation();

	const handleOnClose = () => {
		onClose();
	}

	if (isLoading) {
		return <LoadingIndicator />;
	} else {
		return (
			<div className={`CardViewerContent ${className || ""}`}>
				<CardViewerHeader
					onClose={handleOnClose}
					title={cardData.title}
				/>
				<div className="CardViewerContent__content">
					<div className="CardViewerContent__content--left">
						<div style={{ paddingBottom: "4px" }}>
							<Text size="sm" type="semiBold">{t('CardViewer.step')} {currentStep + 1}</Text>
						</div>
						<div style={{ paddingBottom: "8px" }}>
							<Heading size="xs" type="regular">{stepData.name}</Heading>
						</div>
						<div>
							<Text size="md" type="regular">
								<div dangerouslySetInnerHTML={{ __html: stepData.description }} />
							</Text>
						</div>
					</div>
					<div className="CardViewerContent__content--right">
						{
							stepData.media.length > 0 && (
								<MediaGallery
									mediaUrl={mediaUrl}
									media={stepData.media}
								/>
							)
						}

					</div>
				</div>
				<CardViewerFooter
					initialStepIndex={0}
					stepsAmount={cardData.steps.length}
					onFinish={handleOnClose}
					onChangeStep={(index) => setCurrentStep(index)}
				/>
			</div>
		)
	}
}

CardViewerContent.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	onClose: PropTypes.func,
	mediaUrl: PropTypes.string,
};

CardViewerContent.defaultProps =
{
	className: undefined,
	onClose: undefined,
	mediaUrl: undefined,
};
