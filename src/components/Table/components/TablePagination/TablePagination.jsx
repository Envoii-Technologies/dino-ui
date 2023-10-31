import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TablePagination.scss';

import { Button } from './../../../Button';
import { ButtonGroup } from './../../../ButtonGroup';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const TablePagination = ({
    totalPages,
    currentPage: initialPage,
    handlePageChange,
    totalRows,
    ...props
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            handlePageChange(nextPage);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            handlePageChange(prevPage);
        }
    };

    return (
        <div className="TablePagination">
            <Button
                label="Zurück"
                type="secondary"
                onClick={handlePrevPage}
                iconLeft={faChevronLeft}
                isDisabled={!(currentPage > 1)}
            />
            <ButtonGroup compact={true}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index}
                        className={`TablePagination__button ${
                            currentPage === index + 1
                                ? 'TablePagination__button--active'
                                : ''
                        }`}
                        type="tertiary"
                        onClick={() => {
                            const page = index + 1;
                            setCurrentPage(page);
                            handlePageChange(page);
                        }}
                        label={index + 1}
                    />
                ))}
            </ButtonGroup>
            <Button
                label="Weiter"
                type="secondary"
                onClick={handleNextPage}
                iconRight={faChevronRight}
                isDisabled={!(currentPage < totalPages)}
            />
            {/* </span> */}
        </div>
    );
};

TablePagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    totalRows: PropTypes.number.isRequired,
};

{
    /* <span className="TablePagination__info">
            {totalRows} rows on {totalPages} pages
        </span> */
}
