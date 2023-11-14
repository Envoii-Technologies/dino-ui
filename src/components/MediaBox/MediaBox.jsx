import React from 'react';
import PropTypes from 'prop-types';
import './MediaBox.scss';

import { ProgressBar } from './../../';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const MediaBox = ({ className, id, image, size, progress, showDelete, onDelete, ...props }) => {
	return (
		<div className={`
			MediaBox 
			${className || ""}
			${size ? `MediaBox__size--${size}` : ''}
			`}>
			<div className="MediaBox__wrapper">
				<div className="MediaBox__wrapper__image">
					{
						progress > 0 && (
							<>
								<ProgressBar
									className="MediaBox__wrapper__image__progress"
									fluid={true}
									progress={progress}
								/>
							</>
						)
					}
					{
						showDelete &&
						(
							<>
								<button
									className="MediaBox__wrapper__image__delete"
									onClick={() =>
										onDelete(id)
									}
								>
									<FontAwesomeIcon icon={faClose} />
								</button>
							</>
						)
					}
					<img className='MediaBox__wrapper__image' src={image} />
				</div>
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
	showDelete: PropTypes.bool,
	progress: PropTypes.number,
	id: PropTypes.string,
};

MediaBox.defaultProps =
{
	className: undefined,
	size: "md",
	showDelete: false,
	progress: 0,
	id: undefined
};
