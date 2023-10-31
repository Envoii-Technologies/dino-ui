import React from 'react';
import PropTypes from 'prop-types';

import './TableBody.scss';

import { Checkbox } from './../../../Checkbox';
import { Badge } from './../../../Badge';
import { UserInfo } from './../../../UserInfo';
import Moment from 'react-moment';

export const TableBody = ({
    columns,
    data,
    paginatedData,
    isRowSelected,
    toggleRowSelection,
    isSelectable,
    ...props
}) => {
    return (
        <tbody className="TableBody">
            {paginatedData.map((row) => (
                <tr
                    key={row.id}
                    className={`TableBody__row ${
                        isRowSelected(row.id) ? 'TableBody__row--selected' : ''
                    }`}
                >
                    {isSelectable && (
                        <td className="TableBody__checkbox">
                            <Checkbox
                                onChange={() => toggleRowSelection(row.id)}
                                checked={isRowSelected(row.id)}
                            />
                        </td>
                    )}

                    {columns.map((column) => (
                        <td
                            key={`${row.id}-${column.id}`}
                            style={{
                                width: !column.size
                                    ? '70%'
                                    : column.size > 50
                                    ? column.size
                                    : 50,
                                minWidth: '50px',
                            }}
                            className={`TableBody__row__cell TableBody__row__cell--${column.id}`}
                        >
                            {column.type === 'string' && <>{row[column.id]}</>}
                            {column.type === 'label' && (
                                <div style={{ display: 'flex' }}>
                                    <Badge label={row[column.id]} />
                                </div>
                            )}
                            {column.type === 'user' && <UserInfo username={row[column.id]}/>}
                            {column.type === 'time' && <Moment unix fromNow>{row[column.id]}</Moment>}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
