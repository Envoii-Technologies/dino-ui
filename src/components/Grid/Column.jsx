import React from 'react';
import PropTypes from 'prop-types';
import './Column.scss';

export const Column = ({ className, span, spacing, spacingMD, children, ...props }) => {
    return (
        <>
            <div className={`
                Column
                ${className !== undefined ? className : ''}
                span-${span}
                spacing-${spacing}
                spacing-md-${spacingMD}

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
