import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './IsoIcon.scss'

import signs from './../../data/safetySigns';

export const IsoIcon = ({ className, name, ...props }) =>
{
	const [currentSign, setCurrentSign] = useState(null);

	useEffect(() => {
		setCurrentSign(getSign(name));
	}, [name]);

	const getSign = (name) =>
	{
		const sign = signs.filter((sign, i) => name === sign.id);

		return sign.length > 0 ? sign[0] : null;
	}

	return (
		<div className={`IsoIcon ${ className !== undefined ? className : "" }`}>
			{
				currentSign && <img src={currentSign.filename} alt={currentSign.description.de} />
			}
			
		</div>
	)
}

IsoIcon.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	name: PropTypes.string
};

IsoIcon.defaultProps =
{
	className: undefined,
	name: "E001",
};
