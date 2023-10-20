import React from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

export const Grid = ({ className, children, withPadding, ...props }) => {
    return (
        <>
            <div className={`Grid ${className !== undefined ? className : ''} ${withPadding ? 'padded' : ''}`}>
                { children }
            </div>
        </>
    );
};

Grid.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    withPadding: PropTypes.bool
};

Grid.defaultProps = {
    className: undefined,
    withPadding: true
};
