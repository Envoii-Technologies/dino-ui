import React from 'react';

import { UserLogin } from './UserLogin';

import mockUser from './../../data/mockUser';

export default {
    title: 'Pages/UserLogin',
    component: UserLogin,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    return (
        <>
            <UserLogin/>
        </>
    );
};

export const Default = Template.bind({});
