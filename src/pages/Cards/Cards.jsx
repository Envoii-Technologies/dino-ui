import React from 'react';

import { PageHeader, ButtonGroup, Button, PageSubHeader, Input } from './../../';
import {
    faChevronDown,
    faEllipsisV,
    faFilter,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

export const Cards = ({ isLoading, userData }) => {

    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    <PageHeader title={`Karten`}>
                        <ButtonGroup>
                            <Button label="Neue Karte" iconLeft={faPlus} />
                            <Button iconLeft={faEllipsisV} type="secondary" />
                        </ButtonGroup>
                    </PageHeader>
                    <PageSubHeader>
                        <ButtonGroup>
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
