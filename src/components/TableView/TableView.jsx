import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TableView.scss';
import { Button } from '../Button';
import { faChevronLeft, faChevronRight, faArrowsUpDown, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { ButtonGroup } from '../ButtonGroup';

export const TableView = ({ className, columns, rows, rowsPerPage, initialSearchTerm, initialFilters, onRowClick, multi, ...props }) => {
	const [selectedRows, setSelectedRows] = useState(new Set());
	const [filteredRows, setFilteredRows] = useState(rows || []);
	const [activeRowIndex, setActiveRowIndex] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);
	const [selectAll, setSelectAll] = useState(false);
	const [sortConfig, setSortConfig] = useState({ key: null, direction: 'descending' });

	useEffect(() => {
		let sortedRows = [...rows];
		if (sortConfig.key !== null) {
			sortedRows.sort((a, b) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		setFilteredRows(sortedRows);
	}, [rows, sortConfig]);

	const maxPage = filteredRows.length ? Math.ceil(filteredRows.length / rowsPerPage) - 1 : 0;

	const currentRows = filteredRows ? filteredRows.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage) : [];

	useEffect(() => {
		if (!multi && selectedRows.size > 0) {
			setSelectedRows(new Set()); // Clear selection when disabling multi-select
		}
	}, [multi]);

	useEffect(() => {
		if (!rows || !columns) return;

		const applyFilters = (data, filters) => {
			return data.filter(row =>
				Object.entries(filters).every(([key, values]) =>
					values.some(value => row[key].toString().toLowerCase().includes(value.toLowerCase()))
				)
			);
		};

		let result = rows;

		if (initialFilters) {
			result = applyFilters(result, initialFilters);
		}

		if (initialSearchTerm) {
			const lowercasedTerm = initialSearchTerm.toLowerCase();
			result = result.filter(row =>
				columns.some(column =>
					row[column.id].toString().toLowerCase().includes(lowercasedTerm)
				)
			);
		}

		setFilteredRows(result);
	}, [initialFilters, initialSearchTerm, rows, columns]);

	useEffect(() => {
		setCurrentPage(0); // Reset to first page on new search
	}, [filteredRows]);

	const handleSort = (column) => {
		// Sortierung nur für sortierbare Spalten ermöglichen
		if (column.sortable) {
			let direction = 'ascending';
			if (
				sortConfig.key === column.id &&
				sortConfig.direction === 'ascending'
			) {
				direction = 'descending';
			}
			setSortConfig({ key: column.id, direction });
		}
	};

	const goToPage = (pageIndex) => {
		setCurrentPage(Math.max(0, Math.min(pageIndex, maxPage)));
	};

	const handleSelectRow = (row, isRowSelected) => {
		const newSelectedRows = new Set(selectedRows);
		if (isRowSelected) {
			newSelectedRows.add(row);
		} else {
			newSelectedRows.delete(row);
		}
		setSelectedRows(newSelectedRows);
	};

	const handleSelectAllClick = () => {
		if (selectAll) {
			setSelectedRows(new Set());
			setSelectAll(false);
		} else {
			const newSelectedRows = new Set(filteredRows.slice(
				currentPage * rowsPerPage,
				(currentPage + 1) * rowsPerPage
			));
			setSelectedRows(newSelectedRows);
			setSelectAll(true);
		}
	};

	const renderCell = (row, column) => {
		if (column.component) {
			return column.component(row);
		}
		return row[column.id];
	};

	const handleRowClick = (row, index) => {
		// Wenn multi true ist, ignoriere diese Funktion
		if (multi) return;

		// Wenn nicht, setze die aktive Zeile und führe die Callback-Funktion aus, falls vorhanden
		setActiveRowIndex(index);
		if (onRowClick) {
			onRowClick(row);
		}
	};

	return (
		<div className={`TableView ${className || ""}`}>
			<div className="TableView__content">
				<table>
					<thead className='TableView__header'>
						<tr>
							{multi && (
								<th>
									<input
										type="checkbox"
										checked={selectAll}
										onChange={handleSelectAllClick}
									/>
								</th>
							)}
							{columns.map((column, index) => (
								<th
									key={index}
									style={{ width: column.width || 'auto', minWidth: column.width || 'auto' }}
									onClick={() => handleSort(column)}
								>
									{column.title}
									{column.sortable && (
										<FontAwesomeIcon
											icon={
												sortConfig.key === column.id
													? sortConfig.direction === 'ascending'
														? faArrowUp
														: faArrowDown
													: faArrowsUpDown
											}
											className="sort-icon"
										/>
									)}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						{currentRows && currentRows.length > 0 ? (
							currentRows.map((row, rowIndex) => {
								const isRowSelected = multi ? selectedRows.has(row) : rowIndex === activeRowIndex;
								return (
									<tr
										key={rowIndex}
										className={`TableView__row ${isRowSelected ? "active" : ""}`}
										onClick={() => handleRowClick(row, rowIndex)}
									>
										{multi && (
											<td>
												<input
													type="checkbox"
													checked={isRowSelected}
													onChange={() => handleSelectRow(row, !isRowSelected)}
												/>
											</td>
										)}
										{columns.map((column) => (
											<td key={column.id}>
												<div className='TableView__row__content'>

													{renderCell(row, column)}
												</div>
											</td>
										))}
									</tr>
								);
							})
						) : (
							<tr>
								<td colSpan={columns.length + (multi ? 1 : 0)} style={{ textAlign: "center" }}>
									Keine Daten vorhanden
								</td>
							</tr>
						)}
					</tbody>

				</table>
			</div>
			<div className="TableView__pagination">
				<Button
					className="TableView__pagination-button TableView__pagination-button--prev"
					label="Zurück"
					type="secondary"
					iconLeft={faChevronLeft}
					onClick={() => goToPage(currentPage - 1)}
					disabled={currentPage === 0}
				/>
				<ButtonGroup
					className="TableView__pagination-page-numbers"
					compact={true}
				>
					{Array.from({ length: maxPage + 1 }, (_, index) => (
						<Button
							className={`TableView__pagination-button TableView__pagination-button--page ${index === currentPage ? "TableView__pagination-button--active" : ""}`}
							label={index + 1}
							type="tertiary"
							onClick={() => goToPage(index)}
						/>
					))}
				</ButtonGroup>
				<Button
					className="TableView__pagination-button TableView__pagination-button--next"
					label="Weiter"
					type="secondary"
					iconRight={faChevronRight}
					onClick={() => goToPage(currentPage + 1)}
					disabled={currentPage === maxPage}
				/>
			</div>
		</div>
	)
}

TableView.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	columns: PropTypes.any,
	rows: PropTypes.any,
	rowsPerPage: PropTypes.number,
	onRowClick: PropTypes.func,
	initialSearchTerm: PropTypes.string,
	initialFilters: PropTypes.object,
	multi: PropTypes.bool,
};

TableView.defaultProps =
{
	className: undefined,
	columns: [],
	rows: undefined,
	rowsPerPage: 10,
	onRowClick: null,
	initialSearchTerm: '',
	// initialFilters: { city: ['San Francisco', 'New York'], /*age: ['30']*/ },
	multi: false,
};
