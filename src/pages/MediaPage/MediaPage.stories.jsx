import React from 'react';

import { MediaPage } from './MediaPage';

export default {
    title: 'Pages/MediaPage',
    component: MediaPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = ({args}) => {
    return (
        <>
            <MediaPage />
        </>
    );
};

export const Default = Template.bind({});

