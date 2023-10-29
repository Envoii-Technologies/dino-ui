import React, { useState } from 'react';

import {
    Button,
    Container,
    Input,
    ContentRow,
    Checkbox,
    SelectBox,
    TextArea,
} from './../../';

import { faPlus, faQrcode } from '@fortawesome/free-solid-svg-icons';

export const InformationTab = ({ tagData }) => {
    return (
        <Container>
            <ContentRow>
                <Input
                    label="Erstellt von"
                    disabled={true}
                    value="Benutzer ID"
                />
            </ContentRow>

            <ContentRow>
                <SelectBox multi={true} label="Tags" options={tagData} />
            </ContentRow>

            <ContentRow>
                <Input label="Klassifizierung" disabled={true} />
            </ContentRow>

            <ContentRow>
                <Input label="Fälligkeit" />
            </ContentRow>

            <ContentRow>
                <TextArea label="Notizen" />
            </ContentRow>

            <ContentRow>
                <Button
                    label="QR-Code hinzufügen"
                    isDisabled={true}
                    type="secondary"
                    iconLeft={faPlus}
                    iconRight={faQrcode}
                />
            </ContentRow>

            <ContentRow divider={false}>
                <Checkbox title="Karte für andere sichtbar machen" />
            </ContentRow>
        </Container>
    );
};
