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
} from './../../';

import { NewCardWindow } from './NewCardWindow';

import {
    faChevronDown,
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
    const [searchValue, setSearchValue] = useState("");

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
                            <Column xlSpan={12}>
                                <Container scrollable={false}>
                                    <Table
                                        searchValue={searchValue}
                                        tenant={tenant}
                                        isSelectable={true}
                                        columns={[
                                            { id: 'title', size: '400px', title: 'Titel', sortable: true, type: "link" },
                                            { id: 'version', size: '200px', title: 'Status', sortable: true, type: "version" },
                                            { id: 'creator', size: '150px', title: 'Bearbeitet von', sortable: true, type: "user" },
                                            { id: 'updated_at', size: '200px', title: 'Bearbeitet', sortable: true, type: "time" }
                                        ]}
                                        data={cardsData}
                                    />
                                </Container>
                            </Column>
                        </Row>
                    </Grid>
                </>
            )}
        </>
    );
};
