import { useEffect, useState } from 'react';

export const useTenantLoginPage = ({ error, eventLink, action, isInFocus }) => {
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
            action(tenant);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSendData();
        }
    };

    useEffect(() => {
        setErrorMessage(error);
    }, [error])

    return {
        tenant,
        errorMessage,
        isInFocus,
        handleTenantChange,
        handleTenantFocus,
        handleSendData,
        handleKeyDown,
        eventLink,
    };
}
