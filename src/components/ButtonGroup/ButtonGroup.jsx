import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.scss';

export const ButtonGroup = ({
    className,
    children,
    compact,
    fluid,
    smFluid,
    ...props
}) => {
    const classes = [
        'ButtonGroup',
        className || '',
        compact && 'compact',
        fluid && 'fluid',
        smFluid && 'smFluid',
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={classes} {...props}>{children}</div>;
};

ButtonGroup.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    compact: PropTypes.bool,
    fluid: PropTypes.bool,
    smFluid: PropTypes.bool,
};

ButtonGroup.defaultProps = {
    className: undefined,
    compact: false,
    fluid: false,
    smFluid: false,
};
