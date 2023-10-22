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
    PopOver,
} from '../../';

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
        <ModalContentWindow show={showWindow} onCancel={() => onCancel()}>
            <div className="NewCardWindow__main">
                <Grid>
                    <Row align="bottom">
                        <Column xlSpan={8} mdSpan={4}>
                            <Input
                                label="Titel*"
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
                            <div className='NewCardWindow__content__PopOver__content__title'>Details Hinzufügen</div>
                            <div className='NewCardWindow__content__PopOver__content__body'>
                                Fügen Sie hier Tags, Termine, QR Codes, u.v.m. hinzu. Sie können dies auch später im Bereich "Informationen" machen.
                            </div>
                        </>
                    }
                    position="bottom-center"
                    openOnHover={true}
                >
                    <Badge label="Detals hinzufügen"/>
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
