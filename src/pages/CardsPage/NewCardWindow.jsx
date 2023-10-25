import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
    ModalContentWindow,
    Grid,
    Row,
    Column,
    Button,
    Input,
    OverflowMenu,
    PopOver,
    OverflowDatePicker,
    Badge,
} from '../../';
import {
    faPlus,
    faTag,
    faFlag,
    faCalendar,
    faAlignLeft,
    faQrcode,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

export const NewCardWindow = ({
    showWindow,
    onCancel,
    onSave,
    ...props
}) => {
    const [showDatePickerWindow, setShowDatePickerWindow] = useState(false);

    const [canSaveCard, setCanSaveCard] = useState(false);

    const [cardData, setCardData] = useState({
        title: '',
        deadline: undefined,
    });

    const MenuItems = [
        [
            {
                title: 'Tags',
                icon: faTag,
                onClick: () => alert('Tags'),
            },
            {
                title: 'Klassifizierung',
                icon: faFlag,
                onClick: () => alert('Tags'),
            },
            {
                title: 'Deadline',
                icon: faCalendar,
                onClick: () => setShowDatePickerWindow(true),
            },
        ],
        [
            {
                title: 'Beschreibung',
                icon: faAlignLeft,
                onClick: () => alert('Tags'),
            },
            {
                title: 'QR Code',
                icon: faQrcode,
                onClick: () => alert('Tags'),
                disabled: true,
            },
            {
                title: 'Sprache',
                icon: faGlobe,
                onClick: () => alert('Tags'),
            },
        ],
    ];

    useEffect(() => {
        if (cardData?.title.length > 0) {
            setCanSaveCard(true);
        } else {
            setCanSaveCard(false);
        }
    });

    const handleChangeCardData = (e) => {
        const value = e.target.value;

        // setErrorMessage({ type: '', message: '' });

        setCardData({
            ...cardData,
            [e.target.name]: value,
        });
    };

    const handleChangeDate = (date) => {
        setCardData((data) => ({ ...data, deadline: date }));
        setShowDatePickerWindow(false);
    };

    const handleSaveCard = () =>
    {
        onSave(cardData);
    }

    return (
        <>
            <OverflowDatePicker
                show={showDatePickerWindow}
                onCancel={() => setShowDatePickerWindow(false)}
                onSelectDate={(date) => handleChangeDate(date)}
            />
            <ModalContentWindow
                title="Neue Karte anlegen"
                show={showWindow}
                onCancel={() => onCancel()}
            >
                <div className="NewCardWindow__main">
                    <Grid>
                        <Row align="bottom">
                            <Column xlSpan={8} mdSpan={4}>
                                <Input
                                    label="Titel*"
                                    placeholder="Titel der Karte"
                                    name="title"
                                    onChange={(e) => handleChangeCardData(e)}
                                />
                            </Column>
                            <Column xlSpan={4} mdSpan={2}>
                                <Button
                                    className="NewCardWindow__main__saveButton"
                                    fluid={true}
                                    label="Speichern"
                                    disabled={!canSaveCard}
                                    onClick={() => handleSaveCard()}
                                />
                            </Column>
                        </Row>
                    </Grid>
                </div>
                <div className="NewCardWindow__content">
                    <Grid>
                        <Row>
                            <Column smSpan={4} mdSpan={6} xlSpan={12}>
                                <PopOver
                                    content={
                                        <>
                                            <div className="NewCardWindow__content__PopOver__content__title">
                                                Details Hinzufügen
                                            </div>
                                            <div className="NewCardWindow__content__PopOver__content__body">
                                                Fügen Sie hier Tags, Termine, QR
                                                Codes, u.v.m. hinzu. Sie können
                                                dies auch später im Bereich
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
                                        content={MenuItems}
                                    >
                                        <Button
                                            type="tertiary"
                                            label="Details hinzufügen"
                                            iconRight={faPlus}
                                        />
                                    </OverflowMenu>
                                </PopOver>
                            </Column>
                        </Row>
                        <Row>
                            {cardData?.deadline && (
                                <Column smSpan={4} mdSpan={6} xlSpan={12}>
                                    <Badge
                                        closable={true}
                                        onClick={() => setShowDatePickerWindow(true)}
                                        label={
                                            <Moment format="DD.MM.YYYY">
                                                {cardData?.deadline}
                                            </Moment>
                                        }
                                        onClose={() =>
                                            setCardData((data) => ({
                                                ...data,
                                                deadline: undefined,
                                            }))
                                        }
                                    />
                                </Column>
                            )}
                        </Row>
                    </Grid>
                </div>
                <Button
                    className="NewCardWindow__footer__saveButton"
                    fluid={true}
                    label="Speichern"
                    disabled={!canSaveCard}
                    onClick={() => handleSaveCard()}
                />
            </ModalContentWindow>
        </>
    );
};

