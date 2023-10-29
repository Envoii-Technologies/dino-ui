import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

import { PopOver } from '../PopOver/PopOver';

import './HelpIcon.scss';

export const HelpIcon = ({ className, helpText, position, ...props }) => {
    return (
            <PopOver
                className="HelpIcon"
                content={helpText}
                position="bottom-center"
				openOnHover={true}
            >
                <FontAwesomeIcon className="HelpIcon__icon" icon={faCircleQuestion} />
            </PopOver>
    );
};

HelpIcon.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
	helpText: PropTypes.string,
	position: PropTypes.string,
};

HelpIcon.defaultProps = {
    className: undefined,
	helpText: "This is a Tooltip.",
	position: "bottom-center"
};
