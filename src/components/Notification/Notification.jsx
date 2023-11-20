import React from 'react';
import PropTypes from 'prop-types';

import { useNotifications } from './NotificationContext';

import './Notification.scss';
import { NotificationBox } from './NotificationBox';

export const Notification = ({ className, ...props }) => {
	const { notifications } = useNotifications();

	return (
		<div className={`Notification ${className || ""}`}>
			{notifications.map(({ id, message, options }) => (
				<NotificationBox key={id} id={id} options={options}>
					{message}
				</NotificationBox>
			))}
		</div>
	)
}

Notification.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
};

Notification.defaultProps =
{
	className: undefined,
};
