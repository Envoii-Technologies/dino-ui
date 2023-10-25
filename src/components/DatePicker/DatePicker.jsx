import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { ButtonGroup } from './../ButtonGroup';
import { Button } from './../Button';
import { Grid, Row, Column} from './../Grid';
import { Input } from './../Input';

import './DatePicker.scss';


export const DatePicker = ({ className, onAction, onCancel, startDate, ...props }) => {
    const [value, onChange] = useState(startDate || new Date());

	useEffect(() => {
		
	}, [value])

	const handleOnCancel = () =>
	{
		onCancel();
	}

	const handleOnAction = () =>
	{	
		onAction(value);
	}

    return (
        <div
            className={`DatePicker ${className !== undefined ? className : ''}`}
        >
            <Calendar
                className="DatePicker__calendar"
                onChange={onChange}
                value={value}
				tileClassName="DatePicker__calendar__tile"
				prevLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
				nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
            />
			<ButtonGroup fluid={true}>
				<Button label="Abbrechen" type="secondary" onClick={() => handleOnCancel()}/>
				<Button label="Anwenden" onClick={() => handleOnAction()}/>
			</ButtonGroup>
        </div>
    );
};

DatePicker.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

DatePicker.defaultProps = {
    className: undefined,
	onAction: () => alert("[NOT IMPLEMENTED]"),
	onCancel: () => alert("[NOT IMPLEMENTED]"),
};
