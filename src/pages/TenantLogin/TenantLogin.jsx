import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Input,
    Grid,
    Row,
    Column,
} from './../../';

import LogoIcon from './../../assets/logos/Logo_Icon-dark.svg';

import './TenantLogin.scss';

export const TenantLogin = ({ error, eventLink, action, isInFocus, ...props }) => {
    const [tenant, setTenant] = useState('');
    const [errorMessage, setErrorMessage] = useState(!error ? '' : error);

    const resetErrorMessage = () => {
        setErrorMessage('');
    };

    const handleTenantFocus = () => {
        resetErrorMessage();
        setTenant('');
    };

    const handleTenantChange = (e) => {
        resetErrorMessage();
        setTenant(e.target.value);
    };

    const handleSendData = () =>
    {
        if(tenant === "") 
        {
            setErrorMessage('Bitte gültiges Unternehmen eingeben.');
        }
        else{
            action(tenant);
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSendData();
        }
    };

    return (
        <>
        <Grid withPadding={false}>
        <Row>
        <Column span={4} spacing={5}>
            <div className="TenantLogin__content">
                <div className="TenantLogin__content__header">
                    <img
                        src={LogoIcon}
                        alt=""
                        className="TenantLogin__content__header__icon"
                    />
                    <div className="TenantLogin__content__header__title">
                        Mitarbeiter Login
                    </div>
                </div>
                <div className="TenantLogin__content__form">
                    <Input
                        label="Unternehmensdomain"
                        placeholder="Unternehmensdomain"
                        metaLabel=".envoii.de"
                        metaPosition="right"
                        autoFocus={isInFocus}
                        onFocus={isInFocus ? () => handleTenantFocus() : undefined}
                        onChange={(e) => handleTenantChange(e)}
                        onKeyDown={(e) => handleKeyDown(e)}
                        error={errorMessage}
                    />
                    <Button label="Anmelden" onClick={() => handleSendData()}/>
                </div>
                <div className="TenantLogin__content__footer">
                    <p>
                        Noch kein Account?{' '}
                        <a href={eventLink} target="_blank" rel="noreferrer">
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

TenantLogin.propTypes = {
    error: PropTypes.string,
    eventLink: PropTypes.string,
    isInFocus: PropTypes.bool,
    action: PropTypes.func,
};
TenantLogin.defaultProps = {
    error: undefined,
    eventLink: '/',
    isInFocus: true,
    action: undefined,
};
