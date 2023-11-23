import React from 'react';
import PropTypes from 'prop-types';

import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { OverflowMenu, ProgressBar } from './../../';

import './MediaBox.scss';

export const MediaBox = ({ className, id, image, size, progress, onEdit, onDelete, showMenu, error, success, ...props }) => {

	const handleOnEdit = () => {
		onEdit(id)
	}

	const handleOnDelete = () => {
		onDelete(id)
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
					style={{ backgroundImage: `url(${image})` }}
				/>
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
	id: undefined
};
