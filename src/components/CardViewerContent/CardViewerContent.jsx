import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LoadingIndicator, Divider, Button, ProgressBar, Text, Heading, MediaGallery } from './../../';

import './CardViewerContent.scss';
import { useTranslation } from 'react-i18next';
import { faChevronLeft, faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';

export const CardViewerContent = ({ className, ...props }) => {
	const [isLoading, setIsLoading] = useState(false);

	const { t } = useTranslation();

	if (isLoading) {
		return <LoadingIndicator />;
	} else {
		return (
			<div className="CardViewerContent">
				<div className="CardViewerContent__header">
					<Heading size="lg" type="semiBold">Beispielkarte</Heading>
					<Button
						size="md"
						type="secondary"
						iconLeft={faClose}
					/>
				</div>
				<div className="CardViewerContent__content">
					<div className="CardViewerContent__content--left">
					<div style={{ paddingBottom: "4px" }}>
                                        <Text size="sm" type="semiBold">{t('CardViewer.step')} 1</Text>
                                    </div>
                                    <div style={{ paddingBottom: "8px" }}>
                                        {/* <Heading size="xs" type="regular">{currentStep.name}</Heading> */}
										<Heading size="xs" type="regular">Dingsda dingensen</Heading>
                                    </div>
                                    <div>
                                        <Text size="md" type="regular">
                                            {/* <div dangerouslySetInnerHTML={{ __html: currentStep.description }} /> */}
											Hello World!
                                        </Text>
                                    </div>
					</div>
					<div className="CardViewerContent__content--right">
						<MediaGallery
							initialIndex={0}
							images={[
								"https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
								"https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
								"https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0",
								"https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"
							]}
						/>
					</div>
				</div>
				<div className="CardViewerContent__footer">
					<Divider />
					<div className="CardViewerContent__footer__menu--mobile">
						<Button type="secondary" iconLeft={faChevronLeft} />

						<div className="CardViewerContent__footer__menu--desktop__progress">
							<Text size="xs">
								1 von 2
							</Text>
						</div>

						<Button type="secondary" iconRight={faChevronRight} />
					</div>
					<div className="CardViewerContent__footer__menu--desktop">
						<Button type="secondary" label={t('CardViewer.buttons.previous')} iconLeft={faChevronLeft} />

						<div className="CardViewerContent__footer__menu--desktop__progress">
							<ProgressBar />
							<Text size="xs">
								1 von 2
							</Text>
						</div>

						<Button type="secondary" label={t('CardViewer.buttons.next')} iconRight={faChevronRight} />
					</div>
				</div>
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
};

CardViewerContent.defaultProps =
{
	className: undefined,
};
