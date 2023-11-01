import React from 'react';

import { TenantLoginPage } from './TenantLoginPage';
import { TenantLoginProvider } from './TenantLoginContext';

export default {
    title: 'Pages/TenantLogin',
    component: TenantLoginPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = ({args}) => {
    return (
        <>
            <TenantLoginProvider
                isInFocus={true}
                onAction={() => alert("Ok")}
            >
                <TenantLoginPage />
            </TenantLoginProvider>
        </>
    );
};

export const Default = Template.bind({});

