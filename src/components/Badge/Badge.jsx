import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export const Badge = ({
    className,
    label,
    size,
    color,
    closable,
    pill,
    outline,
    status,
	onClose,
    ...props
}) => {
    return (
        <div
            className={`Badge ${className !== undefined ? className : ''}
				${outline ? 'outline' : ''}
				${pill ? 'pill' : ''}
				${size}
				${color}
			`}
            {...props}
        >
            {status !== 'none' && (
                <div className={`Badge__status ${status}`}></div>
            )}
            <div className="Badge__text">{label}</div>
            {
                closable && <FontAwesomeIcon className="Badge__close" icon={faClose} onClick={onClose}/>
            }
        </div>
    );
};

Badge.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.oneOf([
        'gray',
        'brand',
        'error',
        'warning',
        'success',
        'grayblue',
        'lightblue',
        'blue',
        'indigo',
        'purple',
        'pink',
        'orange',
    ]),
    pill: PropTypes.bool,
    outline: PropTypes.bool,
    status: PropTypes.oneOf([
        'none',
        'gray',
        'brand',
        'error',
        'warning',
        'success',
        'grayblue',
        'lightblue',
        'blue',
        'indigo',
        'purple',
        'pink',
        'orange',
    ]),
	onClose: PropTypes.func,
    closable: PropTypes.bool,
};

Badge.defaultProps = {
    className: undefined,
    label: 'Default Badge',
    size: 'md',
    color: 'gray',
    pill: true,
    outline: false,
    status: 'none',
	onClose: undefined,
    closable: false,
};
