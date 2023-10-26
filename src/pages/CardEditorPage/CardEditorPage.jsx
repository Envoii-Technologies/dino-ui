import React, { useState } from 'react';

import { Breadcrumb, Button, ButtonGroup, LoadingIndicator, PageHeader } from './../../';

import './CardEditorPage.scss';
import { faEllipsis, faEllipsisVertical, faListDots, faRocket } from '@fortawesome/free-solid-svg-icons';

export const CardEditorPage = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <LoadingIndicator showLabel={true} />
            ) : (
                <>
                    <header>
                        <PageHeader title="Bedienung der Hydraulikpresse" location="/acme/Karten/Hydraulikpresse">
                            <ButtonGroup>
                                <Button label="Schliessen" type="secondary"/>
                                <Button label="Veröffentlichen" iconRight={faRocket}/>
                                <Button iconLeft={faEllipsisVertical} type="secondary"/>
                            </ButtonGroup>
                        </PageHeader>
                    </header>
                </>
            )}
        </>
    );
};
