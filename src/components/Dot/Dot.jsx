import React from 'react';
import PropTypes from 'prop-types';
import './Dot.scss';

export const Dot = ({ className, state, size, outline, ...props }) => {
    return (
        <div
            className={`Dot ${className !== undefined ? className : ''} state-${state} size-${size} ${outline ? `outline-${size}` : ''}`}
        ></div>
    );
};

Dot.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	state: PropTypes.oneOf(["success", "warning", "error"]),
	outline: PropTypes.bool,
};

Dot.defaultProps = {
    className: undefined,
	size: "md",
	state: "success",
	outline: false,
};
