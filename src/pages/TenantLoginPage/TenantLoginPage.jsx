import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input, Grid, Row, Column } from './../../';

import { useTenantLoginContext } from './TenantLoginContext';

import LogoIcon from './../../assets/logos/Logo_Icon-dark.svg';

import './TenantLoginPage.scss';

export const TenantLoginPage = ({ error, eventLink, onAction, isInFocus }) => {
    const {
        errorMessage,
        handleTenantFocus,
        handleTenantChange,
        handleSendData,
        handleKeyDown,
    } = useTenantLoginContext({ error, onAction, isInFocus });

    return (
        <>
            <Grid fluid={true}>
                <Row>
                    <Column mdSpan={2} mdStart={3} xlSpan={4} xlStart={5}>
                        <div className="TenantLoginPage__content">
                            <div className="TenantLoginPage__content__header">
                                <img
                                    src={LogoIcon}
                                    alt=""
                                    className="TenantLoginPage__content__header__icon"
                                />
                                <div className="TenantLoginPage__content__header__title">
                                    Mitarbeiter Login
                                </div>
                            </div>
                            <div className="TenantLoginPage__content__form">
                                <Input
                                    label="Unternehmensdomain"
                                    placeholder="Unternehmensdomain"
                                    metaLabel=".envoii.de"
                                    metaPosition="right"
                                    autoFocus={isInFocus}
                                    onFocus={
                                        isInFocus
                                            ? () => handleTenantFocus()
                                            : undefined
                                    }
                                    onChange={(e) => handleTenantChange(e)}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    error={errorMessage}
                                />
                                <Button
                                    label="Anmelden"
                                    onClick={() => handleSendData()}
                                    size="lg"
                                />
                            </div>
                            <div className="TenantLoginPage__content__footer">
                                <p>
                                    Noch kein Account?{' '}
                                    <a
                                        href={eventLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Jetzt Termin vereinbaren
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Column>
                </Row>
            </Grid>
        </>
    );
};

