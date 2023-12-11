import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {MediaBox, MediaPreview } from './../../index';

import './MediaGallery.scss';

export const MediaGallery = ({ className, media, initialIndex, ...props }) => {
	const [selectedImage, setSelectedImage] = useState(initialIndex);
	const [showPreview, setShowPreview] = React.useState(false);
	const [imageOrientation, setImageOrientation] = useState('landscape');

	useEffect(() => {
		setSelectedImage(0);
	}, [media]);

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageOrientation(img.width > img.height ? 'landscape' : 'portrait');
		};
		img.src = media[selectedImage];
	}, [selectedImage]);

	const handleImageSelect = (i) => {
		setSelectedImage(i);
	};

	return (
		<>
		<MediaPreview
			show={showPreview}
			onChangeIndex={(i) => handleImageSelect(i)}
			initialIndex={selectedImage}
			media={media}
			onClose={() => setShowPreview(false)}
		/>
		<div className="MediaGallery">
			<div className="MediaGallery__main">
				{
					media[selectedImage]?.contentType.includes("image") &&
					<img
						src={media[selectedImage]?.filePath}
						className={imageOrientation}
						onClick={() => setShowPreview(true)}
					/>
				}
				{/* {
					media[selectedImage]?.contentType.includes("pdf") &&
					
				} */}
				
			</div>
			{
				media.length > 1 && 
				(<div className="MediaGallery__thumbnails">
				{media.map((image, i) => (
					<MediaBox
						key={i}
						size="md"
						className={`MediaGallery__thumbnail ${media[selectedImage] === image ? 'active' : ''}`}
						image={image?.filePath}
						type={image?.contentType}
						onClick={() => handleImageSelect(i)}
					/>
				))}
				</div>)
			}

			
		</div>
		</>
	);
};

MediaGallery.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	initialIndex: PropTypes.number,
	media: PropTypes.arrayOf(PropTypes.string),
};

MediaGallery.defaultProps =
{
	className: undefined,
	initialIndex: 0,
	media: []
};
