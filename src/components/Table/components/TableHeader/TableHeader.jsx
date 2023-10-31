import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from './../../../Checkbox';

import './TableHeader.scss';

export const TableHeader = ({
    columns,
    sortedColumn,
    sortOrder,
    handleSort,
    selectAll,
    toggleSelectAll,
    isSelectable,
    ...props
}) => {
    return (
        <thead className="TableHeader">
            <tr className="TableHeader__row">
                {isSelectable && (
                    <th className="TableHeader__checkbox">
                        <Checkbox
                            onChange={toggleSelectAll}
                            checked={selectAll}
                        />
                    </th>
                )}

                {columns.map((column) => (
                    <th
                        key={column.id}
                        className={`TableHeader__row__cell ${
                            sortedColumn === column.id
                                ? `TableHeader__row__cell--${sortOrder}`
                                : ''
                        }`}
                        style={{ width: column.size }}
                        onClick={() => handleSort(column.id)}
                    >
                        <div className="TableHeader__content">
                            {column.title}
                            {column.sortable && sortedColumn === column.id && (
                                <span
                                    className={`TableHeader__sort-indicator TableHeader__sort-indicator--${sortOrder}`}
                                >
                                    {sortOrder === 'asc' ? '↑' : '↓'}
                                </span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};
