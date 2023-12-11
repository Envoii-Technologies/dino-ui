import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MediaPreview.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './../../';
import { faChevronLeft, faChevronRight, faClose } from '@fortawesome/free-solid-svg-icons';

export const MediaPreview = ({ className, show, media, initialIndex, onChangeIndex, onClose, mediaUrl, ...props }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [imageIndex, setImageIndex ] = useState(initialIndex);

	useEffect(() => {
		setImageIndex(initialIndex);
		onChangeIndex(initialIndex);
	}, [show]);

	useEffect(() => {
		setIsVisible(show);
	}, [show]);

	const handleOnClose = () => {
		onClose();
	}

	const handlePrevButton = () => {
		if(imageIndex > 0)
		{
			const newIndex = imageIndex - 1
			setImageIndex(newIndex);
			onChangeIndex(newIndex);
		}
	}

	const handleNextButton = () => {
		if(imageIndex < media.length - 1)
		{
			const newIndex = imageIndex + 1
			setImageIndex(newIndex);
			onChangeIndex(newIndex);
		}
	}

	if(!isVisible)
    {
        return null;
    }

	return (
		<>
			<div className={`MediaPreview__wrapper ${media.length === 1 ? 'single' : 'multi'}`}>
			{
						media.length > 1 && imageIndex > 0 ? <div className='MediaPreview__wrapper__button--prev' onClick={() => handlePrevButton()}>
							<FontAwesomeIcon icon={faChevronLeft} />
						</div> : <div className="MediaPreview__wrapper__button--placeholder"></div>
					}
				<div className="MediaPreview__wrapper__content">
					<div className="MediaPreview__wrapper__close" onClick={() => handleOnClose()}>
						<FontAwesomeIcon icon={faClose} />
					</div>
					
					{
						media && <img src={`${mediaUrl}/${media[imageIndex]?.filename}`} alt="" className="MediaPreview__image" />
					}
					
				</div>

				{
						media.length > 1 && imageIndex < media.length - 1 ? <div className='MediaPreview__wrapper__button--next' onClick={() => handleNextButton()}>
							<FontAwesomeIcon icon={faChevronRight} /> 
						</div>: <div className="MediaPreview__wrapper__button--placeholder"></div>
					}
			</div>
		</>
	)
}

MediaPreview.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	show: PropTypes.bool,
	media: PropTypes.arrayOf(PropTypes.string),
	initialIndex: PropTypes.number,
	onClose: PropTypes.func,
	onChangeIndex: PropTypes.func,
};

MediaPreview.defaultProps =
{
	className: undefined,
	show: false,
	media: undefined,
	initialIndex: 0,
	onClose: undefined,
	onChangeIndex: undefined
};
