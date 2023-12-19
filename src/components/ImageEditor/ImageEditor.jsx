import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Cropper, CropperRef } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';
import 'react-advanced-cropper/dist/themes/classic.css';

import './ImageEditor.scss';

export const ImageEditor = ({ className, imageSrc, ...props }) => {
	const cropperRef = useRef(null);
	const inputRef = useRef(null);

	const [image, setImage] = useState(imageSrc);

	const onHandleResult = (event) => {
		const cropper = cropperRef.current;
    if (cropper) {
      const canvas = cropper.getCanvas();
      const newTab = window.open();
      if (newTab && canvas) {
        newTab.document.body.innerHTML = `<img src="${canvas.toDataURL()}"></img>`;
      }
    }
	  };

	  useEffect(() => {
		// Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
		return () => {
		  if (image) {
			URL.revokeObjectURL(image);
		  }
		};
	  }, [image]);

	const zoomIn = () => {
		cropperRef.current?.zoomImage(2);
    };

    const zoomOut = () => {
		cropperRef.current?.zoomImage(0.5);
    };

    const onRotateLeft = () => {
		cropperRef.current?.rotateImage(90);
	  };
	

	  const onRotateRight = () => {
		cropperRef.current?.rotateImage(-90);
	  };

    const flipHorizontal = () => {
        cropperRef.current?.flipImage(true,false);
    };

    const flipVertical = () => {
		cropperRef.current?.flipImage(false,true);
    };
	const defaultSize = ({ imageSize, visibleArea }) => {
		return {
			width: (visibleArea || imageSize).width,
			height: (visibleArea || imageSize).height,
		};
	}

    return (
		<div className={`ImageEditor ${className || ''}`} {...props}>
        <Cropper
			className={`cropper`}
            ref={cropperRef}
			defaultSize={defaultSize}
			// onChange={onChange}
			stencilProps={{
				grid: true
			}}
            src={image}
        />
		<div>
                <button onClick={zoomIn}>Zoom In</button>
                <button onClick={zoomOut}>Zoom Out</button>
                <button onClick={onRotateLeft}>Rotate Left</button>
                <button onClick={onRotateRight}>Rotate Right</button>
                <button onClick={flipHorizontal}>Flip Horizontal</button>
                <button onClick={flipVertical}>Flip Vertical</button>
				<button onClick={onHandleResult}>Result</button>
            </div>
		</div>
    );
};

ImageEditor.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	imageSrc: PropTypes.string,
};

ImageEditor.defaultProps =
{
	className: undefined,
	imageSrc: undefined
};
