import React from 'react';

import { TenantLogin } from './TenantLogin';

import mockUser from './../../data/mockUser';

export default {
    title: 'Pages/TenantLogin',
    component: TenantLogin,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    return (
        <>
            <TenantLogin action={(data) => alert("[NOT IMPLEMENTED]")} isInFocus={true}/>
        </>
    );
};

export const Default = Template.bind({});
