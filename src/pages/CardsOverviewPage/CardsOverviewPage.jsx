import React, { useState } from 'react';

import {
    PageHeader,
    ButtonGroup,
    Button,
    PageSubHeader,
    Input,
    LoadingIndicator,
    Container,
    Grid,
    Row,
    Column,
    Table,
    ContentCard,
    SelectBox,
} from './../../';

import { NewCardWindow } from './NewCardWindow';

import {
    faChevronDown,
    faClose,
    faEllipsisV,
    faFilter,
    faPlus,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';

import './CardsOverviewPage.scss';
import { Link } from 'react-router-dom';

export const CardsOverviewPage = ({
    isLoading,
    tagData,
    tenant,
    cardsData,
    onSaveNewCard,
}) => {
    const [showCreateCardWindow, setShowCreateCardWindow] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showFilterWindow, setShowFilterWindow] = useState(false);
    const [filters, setFilters] = useState({});

    const filterOptions = [{ keyName: 'version', label: 'Version' }];

    const handleFilterChange = (content) => {
        console.log(content);
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     ...content,
        // }));
        console.log(filters)
    };

    function SelectFilter({
        label,
        data,
        keyName,
        onSelectedValue,
        selectedValue,
    }) {
        const uniqueSet = [...new Set(data.map((item) => item[keyName]))];

        const uniqueValues = uniqueSet.map(item => {
            return { value: item, label: item };
        })

        const handleSelectChange = (event) => {
            const selectedFilter = { [keyName]: event };
            console.log(event);
            onSelectedValue(selectedFilter);
        };

        return (
            <>
                {uniqueValues && (
                    <SelectBox
                        multi={true}
                        label={label}
                        searchable={true}
                        defaultValue={''}
                        defaultOptions={uniqueValues}
                        onSelect={handleSelectChange}
                    ></SelectBox>
                )}
            </>
        );
    }

    return (
        <>
            {isLoading ? (
                <LoadingIndicator showLabel={true} />
            ) : (
                <>
                    <NewCardWindow
                        showWindow={showCreateCardWindow}
                        onCancel={() => setShowCreateCardWindow(false)}
                        onSave={(data) => onSaveNewCard(data)}
                        tagData={tagData}
                    />
                    <PageHeader title={`Karten`}>
                        <ButtonGroup>
                            <Button
                                label="Neue Karte"
                                iconLeft={faPlus}
                                onClick={() => setShowCreateCardWindow(true)}
                            />
                            <Button iconLeft={faEllipsisV} type="secondary" />
                        </ButtonGroup>
                    </PageHeader>
                    <PageSubHeader>
                        <ButtonGroup smFluid={true}>
                            <Button
                                label="Status"
                                iconRight={faChevronDown}
                                type="secondary"
                            />
                            <Button
                                label="Filter"
                                iconLeft={faFilter}
                                type="secondary"
                                onClick={() => setShowFilterWindow(true)}
                            />
                            <Button label="Filter zurücksetzen" type="link" />
                        </ButtonGroup>
                        <Input
                            icon={faSearch}
                            placeholder="Karte suchen"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </PageSubHeader>
                    <Grid>
                        <Row>
                            <Column xlSpan={showFilterWindow === true ? 8 : 12}>
                                <Container scrollable={false}>
                                    <Table
                                        initialFilters={filters}
                                        searchValue={searchValue}
                                        columns={[
                                            {
                                                id: 'title',
                                                size: '400px',
                                                title: 'Titel',
                                                sortable: true,
                                                type: 'link',
                                            },
                                            {
                                                id: 'version',
                                                size: '200px',
                                                title: 'Status',
                                                sortable: true,
                                                type: 'version',
                                            },
                                            {
                                                id: 'creator',
                                                size: '150px',
                                                title: 'Bearbeitet von',
                                                sortable: true,
                                                type: 'user',
                                            },
                                            {
                                                id: 'updated_at',
                                                size: '200px',
                                                title: 'Bearbeitet',
                                                sortable: true,
                                                type: 'time',
                                            },
                                        ]}
                                        data={cardsData}
                                    />
                                </Container>
                            </Column>
                            {showFilterWindow && (
                                <Column xlSpan={4}>
                                    <Container
                                        scrollable={false}
                                        padding="vertical-both-horizontal-right"
                                    >
                                        <ContentCard
                                            title="Filter"
                                            icon={faFilter}
                                            actionIcon={faClose}
                                            onAction={() =>
                                                setShowFilterWindow(false)
                                            }
                                        >
                                            {filterOptions.map(
                                                (option, index) => (
                                                    <SelectFilter
                                                        key={index}
                                                        label={option.label}
                                                        keyName={option.keyName}
                                                        data={cardsData}
                                                        onSelectedValue={(
                                                            val
                                                        ) =>
                                                        handleFilterChange(val)
                                                        }
                                                    />
                                                )
                                            )}
                                        </ContentCard>
                                    </Container>
                                </Column>
                            )}
                        </Row>
                    </Grid>
                </>
            )}
        </>
    );
};
