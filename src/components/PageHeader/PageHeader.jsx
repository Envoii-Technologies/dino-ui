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
            className={`PageHeader ${className || ''}`} {...props}
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
    /**
     * The main title to be displayed in the header.
     */
    title: PropTypes.string.isRequired,
    /**
     * The subtitle to be displayed below the title.
     */
    subtitle: PropTypes.string,
    /**
     * The location string for breadcrumb navigation.
     */
    location: PropTypes.object,
    /**
     * Optional children to be rendered in the header.
     */
    children: PropTypes.node,
};

PageHeader.defaultProps = {
    className: undefined,
    subtitle: undefined,
    location: undefined,
    children: undefined,
};
