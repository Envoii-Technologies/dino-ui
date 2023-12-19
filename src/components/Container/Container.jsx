import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({
    className,
    scrollable,
    children,
    padding,
    ...props
}) => {
    return (
        <div
            className={`Container ${className || ''}
            ${
                scrollable ? 'scrollable' : 'static'
            }`}
            { ...props }
        >
            <div className="Container__wrapper">
                <div className="Container__wrapper__container">
                    <div
                        className={`Container__wrapper__container__content ${
                            padding ? `padding-${padding}` : ''
                        }`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

Container.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    scrollable: PropTypes.bool,
    padding: PropTypes.oneOf([
        'vertical-both-horizontal-both',
        'vertical-both-horizontal-left',
        'vertical-both-horizontal-right',
        'vertical-top-horizontal-none',
        'vertical-top-horizontal-both',
        'vertical-top-horizontal-left',
        'vertical-top-horizontal-right',
        'vertical-bottom-horizontal-none',
        'vertical-bottom-horizontal-both',
        'vertical-bottom-horizontal-left',
        'vertical-bottom-horizontal-right',
        'vertical-none-horizontal-both',
        'vertical-none-horizontal-left',
        'vertical-none-horizontal-right',
    ]),
};

Container.defaultProps = {
    className: undefined,
    scrollable: true,
    padding: 'vertical-both-horizontal-both',
};
