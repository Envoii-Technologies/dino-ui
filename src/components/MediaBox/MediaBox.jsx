import React from 'react';
import PropTypes from 'prop-types';

import { faFile, faFilePdf, faFileText, faFileVideo, faPenFancy, faTrash, faVideo } from '@fortawesome/free-solid-svg-icons';
import { OverflowMenu, ProgressBar } from './../../';

import './MediaBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MediaBox = ({ className, id, image, size, progress, onEdit, onDelete, showMenu, error, success, type, ...props }) => {

	const handleOnEdit = () => {
		onEdit(id)
	}

	const handleOnDelete = () => {
		onDelete(id)
	}

	const handleFileType = (type) => {
		let output = "";
		switch (type) {
			case "application/pdf":
				output = "pdf"
				break;
			case "image/bmp":
			case "image/gif":
			case "image/jpeg":
			case "image/png":
			case "image/svg+xml":
				output = "image";
				break;
			case "text/csv":
			case "text/markdown":
				output = "text";
				break;
			case "video/mpeg":
			case "video/mp4":
			case "video/ogg":
			case "video/quicktime":
				output = "video";
				break;
		}

		return output;
	}

	return (
		<div className={`
			MediaBox 
			${className || ""}
			${size ? `MediaBox__size--${size}` : ''}
			`}
			{...props}
		>
			<div className="MediaBox__wrapper">
				{
					progress > 0 && (
						<>
							<ProgressBar
								className="MediaBox__wrapper__progress"
								fluid={true}
								progress={progress}
								error={error}
								success={success}
							/>
						</>
					)
				}
				{
					showMenu && (
						<>
							<div className="MediaBox__wrapper__cover">
								<OverflowMenu
									small={true}
									className="MediaBox__wrapper__cover__menu"
									ellipsis={true}
									content={[
										[
											{
												title: 'Bearbeiten',
												icon: faPenFancy,
												onClick: () => handleOnEdit()
											},
											{
												title: 'Löschen',
												dangerous: true,
												icon: faTrash,
												onClick: () => handleOnDelete()
											},
										]]}
								/>
							</div>
						</>
					)
				}
				<div
					className='MediaBox__wrapper__file'
					style={{ backgroundImage: `url(${image.replace(/\s+/g, '%20')})` }}
				>
					{
						handleFileType(type) === "video" && <FontAwesomeIcon className='MediaBox__wrapper__file__icon' icon={faFileVideo}/>
					}
					{
						handleFileType(type) === "pdf" && <FontAwesomeIcon className='MediaBox__wrapper__file__icon' icon={faFilePdf}/>
					}
					{
						handleFileType(type) === "text" && <FontAwesomeIcon className='MediaBox__wrapper__file__icon' icon={faFileText}/>
					}
				</div>
			</div>
		</div>
	)
}

MediaBox.propTypes = {
	/**
	 * Custom class name for the MediaBox component
	 */
	className: PropTypes.string,

	/**
	 * Unique identifier for the MediaBox component. Used in callback functions 
	 * like onEdit and onDelete to identify which MediaBox is being interacted with.
	 */
	id: PropTypes.string,

	/**
	 * Source URL of the image to be displayed in the MediaBox.
	 */
	image: PropTypes.string.isRequired,

	/**
	 * Size of the MediaBox component. Accepts "sm" (small), "md" (medium), or "lg" (large).
	 */
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	type: PropTypes.oneOf([
		"application/pdf",
		"image/bmp",
		"image/gif",
		"image/jpeg",
		"image/png",
		"image/svg+xml",
		"text/csv",
		"text/markdown",
		"video/mpeg",
		"video/mp4",
		"video/ogg",
		"video/quicktime",
	]),

	/**
	 * Progress value (0-100) indicating the progress status of a task or upload associated 
	 * with the MediaBox. Used to display a ProgressBar.
	 */
	progress: PropTypes.number,

	/**
	 * Function to handle edit actions. It is called with the 'id' prop as an argument 
	 * when the edit option in the menu is clicked.
	 */
	onEdit: PropTypes.func.isRequired,

	/**
	 * Function to handle delete actions. It is called with the 'id' prop as an argument 
	 * when the delete option in the menu is clicked.
	 */
	onDelete: PropTypes.func.isRequired,

	/**
	 * Boolean flag to show or hide the overflow menu in the MediaBox.
	 */
	showMenu: PropTypes.bool,

	/**
	 * Boolean flag indicating if an error state should be displayed, typically used in conjunction 
	 * with the ProgressBar.
	 */
	error: PropTypes.bool,

	/**
	 * Boolean flag indicating if a success state should be displayed, commonly used 
	 * in conjunction with the ProgressBar.
	 */
	success: PropTypes.bool,
};

MediaBox.defaultProps =
{
	className: undefined,
	size: "md",
	showMenu: false,
	progress: 0,
	error: false,
	success: true,
	id: undefined,
	type: "image/png",
};
