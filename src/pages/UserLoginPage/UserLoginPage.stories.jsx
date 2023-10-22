import React from 'react';

import { UserLoginPage } from './UserLoginPage';

import mockUser from './../../data/mockUser';

export default {
    title: 'Pages/UserLogin',
    component: UserLoginPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    return (
        <>
            <UserLoginPage/>
        </>
    );
};

export const Default = Template.bind({});
