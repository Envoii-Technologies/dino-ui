import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import './LoadingIndicator.scss'

export const LoadingIndicator = ({ className, size, showLabel, ...props }) =>
{
	const { t } = useTranslation();
	
	return (
		<div className={`LoadingIndicator ${className || ''}`}>
			<div className="LoadingIndicator__wrapper">
			<div className={`LoadingIndicator__wrapper__spinner ${size}`}></div>
			{
				showLabel && <div className="LoadingIndicator__wrapper__label">{t('LoadingIndicator.message')}</div>
			}
			</div>

		</div>
	)
}

LoadingIndicator.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
     * Size of the loading spinner ('sm', 'md', 'lg', 'xl').
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    /**
     * Whether to show the loading label.
     */
    showLabel: PropTypes.bool,
};

LoadingIndicator.defaultProps =
{
	className: undefined,
	size: "md",
	showLabel: false,
};
