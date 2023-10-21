import React from 'react';
import PropTypes from 'prop-types';
import './Column.scss';

export const Column = ({
    className,
    smSpan,
    mdSpan,
    xlSpan,
    smStart,
    mdStart,
    xlStart,
    children,
}) => {
    return (
        <div
            className={`Column 
            ${className !== undefined ? className : ''}
                ${smSpan ? `Column__span--sm--${smSpan}` : ''} 
                ${mdSpan ? `Column__span--md--${mdSpan}` : ''} 
                ${xlSpan ? `Column__span--xl--${xlSpan}` : ''} 
                ${smStart ? `Column__start--sm--${smStart}` : ''} 
                ${mdStart ? `Column__start--md--${mdStart}` : ''} 
                ${xlStart ? `Column__start--xl--${xlStart}` : ''}`}
        >
            {children}
        </div>
    );
};

Column.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    smSpan: PropTypes.number,
    mdSpan: PropTypes.number,
    xlSpan: PropTypes.number,
    smStart: PropTypes.number,
    mdStart: PropTypes.number,
    xlStart: PropTypes.number,
};

Column.defaultProps = {
    className: undefined,
    smSpan: 4,
    mdSpan: 1,
    xlSpan: 1,
    smStart: undefined,
    mdStart: undefined,
    xlStart: undefined,
};
