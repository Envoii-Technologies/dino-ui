import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input, Grid, Row, Column } from './../../';

import { useTenantLoginPage } from './useTenantLoginPage';

import LogoIcon from './../../assets/logos/Logo_Icon-dark.png';

import './TenantLoginPage.scss';

export const TenantLoginPage = ({ error, eventLink, action, isInFocus, tenantLogo }) => {
    const {
        errorMessage,
        handleTenantChange,
        handleTenantFocus,
        handleSendData,
        handleKeyDown,
    } = useTenantLoginPage({ error, eventLink, action, isInFocus });

    console.log(error);

    return (
        <>
            <Grid fluid={true}>
                <Row>
                    <Column mdSpan={2} mdStart={3} xlSpan={4} xlStart={5}>
                        <div className="TenantLoginPage__content">
                            <div className="TenantLoginPage__content__header">
                                {
                                    tenantLogo && (
                                        <img
                                            src={tenantLogo}
                                            alt=""
                                            className="TenantLoginPage__content__header__icon"
                                        />
                                    )
                                }

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

TenantLoginPage.propTypes = {
    error: PropTypes.string,
    eventLink: PropTypes.string,
    isInFocus: PropTypes.bool,
    action: PropTypes.func,
    tenantLogo: PropTypes.any,
};
TenantLoginPage.defaultProps = {
    error: undefined,
    eventLink: '/',
    isInFocus: true,
    action: undefined,
    tenantLogo: LogoIcon
};