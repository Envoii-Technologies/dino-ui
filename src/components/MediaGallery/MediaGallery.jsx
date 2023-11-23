import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {MediaBox, MediaPreview } from './../../index';

import './MediaGallery.scss';

export const MediaGallery = ({ className, images, ...props }) => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [showPreview, setShowPreview] = React.useState(false);
	const [imageOrientation, setImageOrientation] = useState('landscape');

	useEffect(() => {
		const img = new Image();
		img.onload = () => {
			setImageOrientation(img.width > img.height ? 'landscape' : 'portrait');
		};
		img.src = images[selectedImage];
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
			images={images}
			onClose={() => setShowPreview(false)}
		/>
		<div className="MediaGallery">
			<div className="MediaGallery__main">
				<img
					src={images[selectedImage]}
					className={imageOrientation}
					onClick={() => setShowPreview(true)}
				/>
			</div>
			<div className="MediaGallery__thumbnails">
				{images.map((image, i) => (
					<MediaBox
						key={i}
						size="sm"
						className={`MediaGallery__thumbnail ${images[selectedImage] === image ? 'active' : ''}`}
						image={image}
						onClick={() => handleImageSelect(i)}
					/>
				))}
			</div>
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
	images: PropTypes.arrayOf(PropTypes.string),
};

MediaGallery.defaultProps =
{
	className: undefined,
	images: []
};
