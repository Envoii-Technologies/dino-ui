import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './Grid.scss';

export const Grid = ({ className, fluid, children, ...props }) => {
    return (
		<div className={`Grid ${className || ''} ${fluid ? 'fluid' : ''}`} {...props}>
		{children}
	  </div>
    );
};

Grid.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    fluid: PropTypes.bool,
};

Grid.defaultProps = {
    className: undefined,
    fluid: true,
};
