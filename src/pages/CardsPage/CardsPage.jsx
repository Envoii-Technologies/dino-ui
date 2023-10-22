import React, { useState } from 'react';

import { PageHeader, ButtonGroup, Button, PageSubHeader, Input, PopOver, Badge } from './../../';

import { NewCardWindow } from './NewCardWindow';

import {
    faChevronDown,
    faEllipsisV,
    faFilter,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import './CardsPage.scss';

export const CardsPage = ({ isLoading, userData }) => {
    const [ showCreateCardWindow, setShowCreateCardWindow ] = useState(false);

    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    <NewCardWindow showWindow={showCreateCardWindow} onCancel={() => setShowCreateCardWindow(false)}/>
                    <PageHeader title={`Karten`}>
                        <ButtonGroup>
                            <Button label="Neue Karte" iconLeft={faPlus} onClick={() => setShowCreateCardWindow(true)}/>
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
                        <Input/>
                    </PageSubHeader>
                </>
            )}
        </>
    );
};
