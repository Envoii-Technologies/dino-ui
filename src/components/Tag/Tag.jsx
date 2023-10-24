import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Dot } from '../Dot';
import { Checkbox } from '../Checkbox';

export const Tag = ({ className, size, icon, label, action, onClose, onCheck, count, status, ...props }) =>
{
	return (
		<div className={`Tag ${ className !== undefined ? className : "" } size-${size}`}>
			{
				onCheck && <Checkbox onChange={(checked) => onCheck(checked)}/>
			}
			{status !== 'none' && (
                <Dot state={status} size={size}/>
            )}
			<div className="Tag__label">{ label }</div>
			{
				onClose && <div className="Tag__close" onClick={() => onClose()}><FontAwesomeIcon icon={faClose}/></div>
			}
			{
				count > 0 && <div className="Tag__count">{ count }</div>
			}
		</div>
	)
}

Tag.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	label: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	count: PropTypes.number,
	status: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
};

Tag.defaultProps =
{
	className: undefined,
	label: "Label",
	size: "md",
	onClose: undefined,
	count: 100,
	status: "none",
};
