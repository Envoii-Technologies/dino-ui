import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LockView } from './../../index';

import './Tabs.scss';

export const Tabs = ({ className, children, currentSelected, disabled, ...props }) => {
    const [tabs, setTabs] = useState(children);

    const [activeTab, setActiveTab] = useState(
        currentSelected < tabs?.length ? currentSelected : 0
    );

    return (
        <div className={`Tabs ${className !== undefined ? className : ''}`}>
            {
                disabled && <LockView/>
            }
            
            <div className="Tabs__menu">
                {tabs &&
                    tabs.map((item, i) => (
                        <div
                            key={i}
                            className={`Tabs__menu__item ${activeTab === i ? 'active' : ''}`}
                            onClick={() => setActiveTab(i)}
                        >
                            {item.props.title}
                        </div>
                    ))}
            </div>

            <div className="Tabs__content">
                {tabs && tabs[activeTab].props.children}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    currentSelected: PropTypes.number,
    disabled: PropTypes.bool,
};

Tabs.defaultProps = {
    className: undefined,
    currentSelected: 0,
    disabled: false,
};
