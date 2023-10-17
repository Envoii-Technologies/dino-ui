import React from 'react';
import PropTypes from 'prop-types';
import './Column.scss';

export const Column = ({ className, span, children, ...props }) => {
    return (
        <>
            <div className={`
                Column
                ${className !== undefined ? className : ''}
                span${span}
            `}>
                { children }
            </div>
        </>
    );
};

Column.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    span: PropTypes.oneOf([1, 2, 3, 4, 6, 12]),
};

Column.defaultProps = {
    className: undefined,
    span: 1,
};
