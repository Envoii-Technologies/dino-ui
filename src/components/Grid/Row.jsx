import React from 'react';
import PropTypes from 'prop-types';
import './Row.scss';

export const Row = ({ className, children, ...props }) => {
    return (
        <>
            <div className={`Row ${className !== undefined ? className : ''}`}>
                { children }
            </div>
        </>
    );
};

Row.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

Row.defaultProps = {
    className: undefined,
};
