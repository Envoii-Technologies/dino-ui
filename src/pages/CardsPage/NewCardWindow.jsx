import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    ModalContentWindow,
    Grid,
    Row,
    Column,
    Button,
    Input,
    Badge,
    OverflowMenu,
    PopOver,
} from '../../';
import { faPlus, faTag, faFlag, faCalendar, faAlignLeft, faQrcode, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const NewCardWindow = ({
    className,
    showWindow,
    onCancel,
    ...props
}) => {
    const [canSaveCard, setCanSaveCard] = useState(false);
    const [cardTitle, setCardTitle] = useState('');

    useEffect(() => {
        if (cardTitle.length > 0) {
            setCanSaveCard(true);
        } else {
            setCanSaveCard(false);
        }
    });

    const handleChangeCardTitle = (e) => {
        setCardTitle(e.target.value);
    };

    return (
        <ModalContentWindow title="Neue Karte anlegen" show={showWindow} onCancel={() => onCancel()}>
            <div className="NewCardWindow__main">
                <Grid>
                    <Row align="bottom">
                        <Column xlSpan={8} mdSpan={4}>
                            <Input
                                label="Titel*"
                                placeholder="Titel der Karte"
                                onChange={(e) => handleChangeCardTitle(e)}
                            />
                        </Column>
                        <Column xlSpan={4} mdSpan={2}>
                            <Button
                                className="NewCardWindow__main__saveButton"
                                fluid={true}
                                label="Speichern"
                                disabled={!canSaveCard}
                            />
                        </Column>
                    </Row>
                </Grid>
            </div>
            <div className="NewCardWindow__content">
                <PopOver
                    content={
                        <>
                            <div className="NewCardWindow__content__PopOver__content__title">
                                Details Hinzufügen
                            </div>
                            <div className="NewCardWindow__content__PopOver__content__body">
                                Fügen Sie hier Tags, Termine, QR Codes, u.v.m.
                                hinzu. Sie können dies auch später im Bereich
                                "Informationen" machen.
                            </div>
                        </>
                    }
                    position="bottom-center"
                    openOnHover={true}
                >
                    <OverflowMenu
                        anchor="above-left"
                        label="Details hinzufügen"
                        content={[
                            [
                                {
                                    title: 'Tags',
                                    icon: faTag,
                                    onClick: () => alert("Tags")
                                },
                                {
                                    title: 'Klassifizierung',
                                    icon: faFlag,
                                    onClick: () => alert("Tags")
                                },
                                {
                                    title: 'Deadline',
                                    icon: faCalendar,
                                    onClick: () => alert("Tags")
                                },
                            ],
                            [
                                {
                                    title: 'Beschreibung',
                                    icon: faAlignLeft,
                                    onClick: () => alert("Tags")
                                },
                                {
                                    title: 'QR Code',
                                    icon: faQrcode,
                                    onClick: () => alert("Tags"),
                                    disabled: true,
                                },
                                {
                                    title: 'Sprache',
                                    icon: faGlobe,
                                    onClick: () => alert("Tags")
                                },
                            ],
                        ]}
                    >
                        <Button type="tertiary" label="Details hinzufügen" iconRight={faPlus}/>
                    </OverflowMenu>
                </PopOver>
            </div>
            <Button
                className="NewCardWindow__footer__saveButton"
                fluid={true}
                label="Speichern"
                disabled={!canSaveCard}
            />
        </ModalContentWindow>
    );
};

NewCardWindow.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

NewCardWindow.defaultProps = {
    className: undefined,
};
