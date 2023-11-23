import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Moment from "react-moment";
import 'moment/locale/de';

import {
    LoadingIndicator,
    PageHeader,
    ButtonGroup,
    Button,
    PageSubHeader,
    Input,
    Grid,
    Row,
    Column,
    Container,
    ModalInfoWindow,
    TableView,
    ContentCard,
    Text,
    Badge,
    UserInfo,
    Divider,
} from './../../'

import { NewCardWindow } from "./NewCardWindow";

import {
    faPlus,
    faPen,
    faClose,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import './CardsOverviewPage.scss';

export const CardsOverviewPage = ({
    tenant,
    isLoading,
    onCreateCard,
    onDeleteCard,
    userRole,
    cardList
}) => {
    const [showCreateCardWindow, setShowCreateCardWindow] = useState(false);
    const [showDeleteCardWindow, setShowDeleteCardWindow] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [activeCard, setActiveCard] = useState(null);

    const navigate = useNavigate();

    const handleShowDeleteWindow = (data) => {
        setSelectedCard(data);
        setShowDeleteCardWindow(true);
    }

    const handleOnDelete = (data) => {
        onDeleteCard(selectedCard);
        setSelectedCard(null);
        setShowDeleteCardWindow(false);
    }

    const handleSelectRow = (row) => {
        console.log(row);
        setActiveCard(row);
    }

    if (isLoading) {
        return <LoadingIndicator showLabel={true} />;
    } else {
        return (
            <>
                <ModalInfoWindow
                    show={showDeleteCardWindow}
                    title="Karte löschen"
                    body="Sind Sie sicher, dass Sie diese Karte löschen wollen?"
                    icon={faTrashCan}
                    cancelText="Abbrechen"
                    type="error"
                    actionText="Löschen"
                    onCancel={() => setShowDeleteCardWindow(false)}
                    onAction={() => handleOnDelete()}
                />
                <NewCardWindow
                    showWindow={showCreateCardWindow}
                    onCancel={() => setShowCreateCardWindow(false)}
                    onSave={(data) => onCreateCard(data)}
                />
                <PageHeader title="Karten">
                    <ButtonGroup>
                        {
                            userRole === "app_admin" &&
                            (
                                <Button
                                    label="Neue Karte"
                                    iconLeft={faPlus}
                                    onClick={() => setShowCreateCardWindow(true)}
                                />
                            )
                        }
                    </ButtonGroup>
                </PageHeader>
                <PageSubHeader>
                    <ButtonGroup smFluid={true}>
                        {/* <Button
                                label="Status"
                                iconRight={faChevronDown}
                                type="secondary"
                            />
                            <Button
                                label="Filter"
                                iconLeft={faFilter}
                                type="secondary"
                                // onClick={() => setShowFilterWindow(true)}
                            />
                            <Button label="Filter zurücksetzen" type="link" /> */}
                    </ButtonGroup>
                    <Input
                        icon={faSearch}
                        placeholder="Karte suchen"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </PageSubHeader>
                <Grid>
                    <Row>
                        {
                            userRole === "app_admin" ?
                                (
                                    <Column xlSpan={12}>
                                        <Container scrollable={false}>
                                            <TableView
                                                initialSearchTerm={searchValue}
                                                rowsPerPage={15}
                                                columns={[
                                                    {
                                                        id: 'title',
                                                        title: 'Titel',
                                                        component: (row) => <Link to={`/${tenant}/cards/edit/${row.deck}`}><Text size="sm" type="regular">{row.title}</Text></Link>,
                                                        sortable: true
                                                    },
                                                    {
                                                        id: 'version',
                                                        title: 'Status',
                                                        width: "120px",
                                                        component: (row) => {
                                                            if (row.version === "0.0") {
                                                                return <>
                                                                    {
                                                                        row.isInReview ? <Badge pill={false} status="gray" label={`Review`} />
                                                                            :
                                                                            row.isDraft ? <Badge pill={false} status="gray" label={`Entwurf`} /> :
                                                                                ''
                                                                    }
                                                                </>
                                                            }
                                                            else {
                                                                return <>
                                                                    {
                                                                        row.isInReview ? <Badge pill={false} status="gray" label={`${row.version} Review`} />
                                                                            :
                                                                            row.isReleased ? <Badge pill={false} status="success" label={row.version} />
                                                                                :
                                                                                row.isDraft ? <Badge pill={false} status="gray" label={`${row.version} Entwurf`} /> :
                                                                                    ''
                                                                    }
                                                                </>
                                                            }
                                                        },
                                                        sortable: true
                                                    },
                                                    {
                                                        id: 'title',
                                                        title: 'Erstellt von',
                                                        width: "200px",
                                                        component: (row) => <UserInfo username={`${row.editor.firstName} ${row.editor.lastName}`} />,
                                                        sortable: true
                                                    },
                                                    {
                                                        id: 'updated_at',
                                                        title: 'Bearbeitet',
                                                        width: "150px",
                                                        component: (row) => <Moment fromNow locale="de">{row.updated_at}</Moment>,
                                                        sortable: true
                                                    },
                                                    {
                                                        id: 'title',
                                                        title: '',
                                                        width: "170px",
                                                        component: (row) => {
                                                            return (
                                                                <>
                                                                    <ButtonGroup>
                                                                        <Button type="secondary" iconLeft={faEye} onClick={() => navigate(`/${tenant}/cards/view/${row.deck}`)} />
                                                                        <Button type="secondary" iconLeft={faTrashCan} onClick={() => handleShowDeleteWindow(row.deck)} />
                                                                        <Button type="secondary" iconLeft={faPen} onClick={() => navigate(`/${tenant}/cards/edit/${row.deck}`)} />
                                                                    </ButtonGroup>
                                                                </>
                                                            )
                                                        },
                                                        sortable: false
                                                    },
                                                ]}
                                                rows={cardList.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)}
                                            />
                                        </Container>
                                    </Column>
                                )
                                :
                                (
                                    <>
                                        <Column xlSpan={activeCard === null ? 12 : 8}>
                                            <Container scrollable={false}>
                                                <TableView
                                                    initialSearchTerm={searchValue}
                                                    onRowClick={(data) => handleSelectRow(data)}
                                                    rowsPerPage={15}
                                                    columns={[
                                                        {
                                                            id: 'title',
                                                            title: 'Titel',
                                                            component: (row) => <div style={{ cursor: "pointer" }}><Text size="sm" type="regular">{row.title}</Text></div>,
                                                            sortable: true
                                                        },
                                                        {
                                                            id: 'version',
                                                            title: 'Status',
                                                            width: "100px",
                                                            component: (row) => <Badge pill={false} status="success" label={row.version} />,
                                                            sortable: true
                                                        },
                                                        {
                                                            id: 'title',
                                                            title: 'Erstellt von',
                                                            width: "200px",
                                                            component: (row) => <UserInfo username={`${row.editor.firstName} ${row.editor.lastName}`} />,
                                                            sortable: true
                                                        },
                                                        {
                                                            id: 'updated_at',
                                                            title: 'Bearbeitet',
                                                            width: "200px",
                                                            component: (row) => <Moment fromNow locale="de">{row.updated_at}</Moment>,
                                                            sortable: true
                                                        }
                                                    ]}
                                                    rows={cardList.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1)}
                                                />
                                            </Container>
                                        </Column>
                                        {
                                            activeCard && (
                                                <Column xlSpan={4}>
                                                    <Container scrollable={false} padding="vertical-both-horizontal-right">
                                                        <ContentCard
                                                            onAction={() => setActiveCard(null)}
                                                            actionIcon={faClose}
                                                            type="secondary"
                                                            title={activeCard.title}
                                                        >
                                                            <div>
                                                                <Text size="sm" type="semiBold">Erstellt von </Text><Text size="sm" type="regular">{activeCard.editor.firstName} {activeCard.editor.lastName}</Text>
                                                            </div>
                                                            <Divider />
                                                            <div>
                                                                <Text size="sm" type="semiBold">Aktualisiert </Text>
                                                                <Text size="sm" type="regular">
                                                                    <Moment format="DD.MM.YYYY, HH:MM">{activeCard.updated_at}</Moment> Uhr
                                                                </Text>
                                                            </div>
                                                            <Divider />
                                                            <div>
                                                                <Text size="sm" type="semiBold">Version </Text>
                                                                <div style={{ display: "inline-block" }}>
                                                                    <Badge status="success" label={activeCard.version} pill={false} />
                                                                </div>
                                                            </div>
                                                            <Divider />
                                                            <div style={{ display: "flex", height: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                                                <Button
                                                                    label="Öffnen"
                                                                    onClick={() => navigate(`/${tenant}/cards/view/${activeCard.deck}`)}
                                                                />
                                                            </div>

                                                        </ContentCard>
                                                    </Container>
                                                </Column>
                                            )
                                        }
                                    </>
                                )
                        }
                    </Row>
                </Grid>
            </>
        );
    }
};
