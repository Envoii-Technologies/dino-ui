import React from 'react';

import { TenantLoginPage } from './TenantLoginPage';

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
            <TenantLoginPage />
        </>
    );
};

export const Default = Template.bind({});

