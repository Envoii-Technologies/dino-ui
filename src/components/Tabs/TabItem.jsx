import React from 'react';
import PropTypes from 'prop-types';

export const TabItem = ({ className, title, children, ...props }) => {
    return (<>children</>)
}

TabItem.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    /**
     * Title of Tab 
     */
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

TabItem.defaultProps = {
    className: undefined,
    title: "Example Tab"
};
