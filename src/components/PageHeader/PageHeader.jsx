import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb } from './../Breadcrumb';

import './PageHeader.scss';

export const PageHeader = ({
    className,
    title,
    subtitle,
    location,
    children,
    ...props
}) => {
    return (
        <div
            className={`PageHeader ${className !== undefined ? className : ''}`}
        >
            <div className="PageHeader__wrapper">
                {location && (
                    <div className="PageHeader__wrapper__breadcrumb">
                        <Breadcrumb location={location} />
                    </div>
                )}

                <div className="PageHeader__wrapper__main">
                    <div className="PageHeader__left">
                        <div className="PageHeader__left__title">{title}</div>
                        <div className="PageHeader__left__subtitle">
                            {subtitle}
                        </div>
                    </div>
                    <div className="PageHeader__right">{children}</div>
                </div>
            </div>
        </div>
    );
};

PageHeader.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    location: PropTypes.string,
};

PageHeader.defaultProps = {
    className: undefined,
    location: undefined
};
