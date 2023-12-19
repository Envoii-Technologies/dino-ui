import React from 'react';
import PropTypes from 'prop-types';
import './Row.scss';

export const Row = ({ className, align, children, ...props }) => {
    return (
      <div className={`
        Row
        ${className || ''}
        ${align}
      `} {...props}>
        {children}
      </div>
    );
  };

Row.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    align: PropTypes.oneOf(["top", "center", "bottom"]),
};

Row.defaultProps = {
    className: undefined,
    align: "center",
};
