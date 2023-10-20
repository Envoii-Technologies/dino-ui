import React from 'react';

import {
    PageHeader,
    ButtonGroup,
    Button,
    PageSubHeader,
    Checkbox,
    Input,
} from './../../';

import LogoIcon from './../../assets/logos/Logo_Icon-dark.svg';

import './UserLogin.scss';

export const UserLogin = ({ eventLink }) => {
    return (
        <div className="UserLogin">
            <div className="UserLogin__content">
                <div className="UserLogin__content__header">
                    <img
                        src={LogoIcon}
                        alt=""
                        className="UserLogin__content__header__icon"
                    />
                    <div className="UserLogin__content__header__title">
                        Anmelden
                    </div>
                    <div className="UserLogin__content__header__subtitle">
                        Willkommen zurück! Melden Sie sich hier an.
                    </div>
                </div>
                <div className="UserLogin__content__form">
                    <Input label="E-Mail" placeholder="E-Mail eingeben"/>
                    <Input label="Passwort" placeholder="Passwort eingeben" type="password"/>
                    <div className="UserLogin__content__form__meta">
                        <Checkbox title="Für 30 Tage merken" />
                        <Button type="link" label="Passwort vergessen"/>
                    </div>
                    <Button label="Anmelden"/>
                </div>
                <div className="UserLogin__content__footer">
                    <p>
                        Noch kein Account?{' '}
                        <a href={eventLink} target="_blank" rel="noreferrer">
                            Jetzt Termin vereinbaren
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
