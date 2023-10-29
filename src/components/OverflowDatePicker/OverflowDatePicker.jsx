import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from './../DatePicker';

import { OverflowContent } from '../OverflowContent/OverflowContent';

import './OverflowDatePicker.scss';

export const OverflowDatePicker = ({ className, show, selectedDate, onSelectDate, onCancel, ...props }) =>
{
	const [showWindow, setShowWindow ] = useState(show);

	const handleSelectDate = (date) =>
	{
		setShowWindow(false);
		onSelectDate(date);
	}

	const handleCancelSelection = () =>
	{
		setShowWindow(false);
		onCancel();
	}

	useEffect(() => {
		setShowWindow(show);
	}, [show]);

	return (
		<>
			<OverflowContent show={showWindow}>
				<DatePicker onCancel={() => handleCancelSelection()} onAction={(date) => handleSelectDate(date)} startDate={selectedDate}/>
			</OverflowContent>
		</>
	)
}

OverflowDatePicker.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	show: PropTypes.bool,
	selectedDate: PropTypes.any,
	
};

OverflowDatePicker.defaultProps =
{
	className: undefined,
	show: false,
	selectedDate: new Date()
};
