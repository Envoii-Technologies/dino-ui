import React from 'react';
import PropTypes from 'prop-types';
import './MediaBox.scss';

import { OverflowMenu, ProgressBar } from './../../';

import { faClose, faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons';

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
				<img className='MediaBox__wrapper__file' src={image} />
			</div>
		</div>
	)
}

MediaBox.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	showMenu: PropTypes.bool,
	error: PropTypes.bool,
	success: PropTypes.bool,
	progress: PropTypes.number,
	id: PropTypes.string,
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
