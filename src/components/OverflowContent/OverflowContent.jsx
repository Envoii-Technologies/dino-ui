import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './OverflowContent.scss'

export const OverflowContent = ({ className, children, show, ...props }) =>
{
	const [fadeOut, setFadeOut] = useState(false);
	const [visible, setVisible] = useState(show);

	useEffect(() => {
		if(show === false)
		{
			handleShowDelay()
		}
		else
		{
			setVisible(true);
		}
	}, [show]);

	const handleShowDelay = () => {
        setFadeOut(true);

        setTimeout(() => {
			setVisible(false);
            setFadeOut(false);
        }, 500);
    };

	if (!visible) {
        return null;
    }

	return (
		<div className={`OverflowContent ${ className !== undefined ? className : "" } ${fadeOut ? 'fadeOut' : 'fadeIn'}`}>
			{children}
		</div>
	)
}

OverflowContent.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	show: PropTypes.bool,
};

OverflowContent.defaultProps =
{
	className: undefined,
	show: false,
};
