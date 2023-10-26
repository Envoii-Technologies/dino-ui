import React from 'react';
import PropTypes from 'prop-types';
import './ContentRow.scss';

import { Column,Row, Grid, Input, Divider } from './../../';

export const ContentRow = ({ className, children, divider, ...props }) =>
{
	return (
		<div className={`ContentRow ${ className !== undefined ? className : "" }`} {...props}>
			<Grid className="ContentRow__wrapper">
				<Row>
					<Column xlSpan={4} xlStart={5}>
						{ children }
					</Column>
				</Row>
			</Grid>
			{
				divider && <Divider/>
			}
		</div>
	)
}

ContentRow.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	divider: PropTypes.bool
};

ContentRow.defaultProps =
{
	className: undefined,
	divider: true
};
