import React, { createContext, useContext, useState, useEffect } from 'react';

const TenantLoginContext = createContext();

export const TenantLoginProvider = ({ children, error, onAction, isInFocus }) => {
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

    const handleSendData = () => {
        if (tenant === '') {
            setErrorMessage('Bitte gültiges Unternehmen eingeben.');
        } else {
            onAction(tenant);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSendData();
        }
    };

    useEffect(() => {
        setErrorMessage(error);
    }, [error]);

    const state = {
        errorMessage,
        tenant,
        resetErrorMessage,
        handleTenantFocus,
        handleTenantChange,
        handleSendData,
        handleKeyDown,
        error,
        isInFocus,
    };

    return (
        <TenantLoginContext.Provider value={state}>
            {children}
        </TenantLoginContext.Provider>
    );
};

export const useTenantLoginContext = () => {
    return useContext(TenantLoginContext);
};
