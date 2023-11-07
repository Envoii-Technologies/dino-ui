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
    icon,
    iconPosition,
    status,
	onClose,
    ...props
}) => {

    const handleClose = (e) =>
    {
        e.stopPropagation();
        onClose();
    };

    const renderIcon = () => {
        if (icon && iconPosition === 'left') {
          return <FontAwesomeIcon className="Badge__icon--left" icon={icon} />;
        } else if (icon && iconPosition === 'right') {
          return <FontAwesomeIcon className="Badge__icon--right" icon={icon} />;
        }
        return null;
      };

    return (
        <span
            className={`Badge ${className !== undefined ? className : ''}
				${outline ? 'outline' : ''}
				${pill ? 'pill' : ''}
				${size}
				${color}
			`}
            {...props}
        >
            {renderIcon()}
            {status !== 'none' && (
                <div className={`Badge__status ${status}`}></div>
            )}
            <div className="Badge__text">{label}</div>
            {
                icon && iconPosition === "right" && <FontAwesomeIcon className={`Badge__icon--right`} icon={icon}/>
            }
            {
                closable && <FontAwesomeIcon className="Badge__close" icon={faClose} onClick={(e) => handleClose(e)}/>
            }
        </span>
    );
};

Badge.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    iconPosition: PropTypes.oneOf(['left', 'right']),
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
    icon: undefined,
	onClose: undefined,
    closable: false,
    iconPosition: 'left',
};
