import React from 'react';
import PropTypes from 'prop-types';

import { Button, Checkbox, Input, Grid, Row, Column } from './../../';

import LogoIcon from './../../assets/logos/Logo_Icon-dark.png';

import './UserLoginPage.scss';

export const UserLoginPage = ({ eventLink }) => {
    return (
        <>
            <Grid fluid={true}>
                <Row>
                    <Column mdSpan={2} mdStart={3} xlSpan={4} xlStart={5}>
                        <div className="UserLoginPage__content">
                            <div className="UserLoginPage__content__header">
                                <img
                                    src={LogoIcon}
                                    alt=""
                                    className="UserLoginPage__content__header__icon"
                                />
                                <div className="UserLoginPage__content__header__title">
                                    Anmelden
                                </div>
                                <div className="UserLoginPage__content__header__subtitle">
                                    Willkommen zurück! Melden Sie sich hier an.
                                </div>
                            </div>
                            <div className="UserLoginPage__content__form">
                            <Input
                                label="E-Mail"
                                placeholder="E-Mail eingeben"
                            />
                            <Input
                                label="Passwort"
                                placeholder="Passwort eingeben"
                                type="password"
                            />
                            <div className="UserLoginPage__content__form__meta">
                                <Checkbox title="Für 30 Tage merken" />
                                <Button
                                    type="link"
                                    label="Passwort vergessen"
                                />
                            </div>
                            <Button label="Anmelden" size="lg" />
                        </div>
                        <div className="UserLoginPage__content__footer">
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
