import React from 'react';
import PropTypes from 'prop-types';
import './Tag.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Dot } from '../Dot';
import { Checkbox } from '../Checkbox';

export const Tag = ({
    className,
    size,
    label,
    onClose,
    onCheck,
    count,
    status,
    ...props
}) => {
	const renderCheckbox = typeof onCheck === 'function';

    return (
        <div className={`Tag ${className || ''} size-${size}`}>
           {renderCheckbox && <Checkbox onChange={(checked) => onCheck(checked)} />}
            {status !== 'none' && <Dot state={status} size={size} />}
            <div className="Tag__label">{label}</div>
            {onClose && (
                <div className="Tag__close" onClick={() => onClose()}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            )}
            {count > 0 && <div className="Tag__count">{count}</div>}
        </div>
    );
};

Tag.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	/**
   * The label for the tag.
   */
    label: PropTypes.string,
	/**
   * The size of the tag ('sm', 'md', 'lg').
   */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
	/**
   * The count to display (optional).
   */
    count: PropTypes.number,
	/**
   * The status of the tag ('none', 'success', 'warning', 'error').
   */
    status: PropTypes.oneOf(['none', 'success', 'warning', 'error']),
	/**
   * Callback function when the close icon is clicked (optional).
   */
	onClose: PropTypes.func,
	/**
	 * Callback function when the checkbox state changes (optional).
	 */
	// onCheck: PropTypes.func,
};

Tag.defaultProps = {
    className: undefined,
    label: 'Label',
    size: 'md',
    count: 100,
    status: 'none',
    onClose: undefined,
	// onCheck: undefined,
};
