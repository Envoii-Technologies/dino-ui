import React from 'react';

import { CardViewerPage } from './CardViewerPage';
import { Layout } from '../../components/Layout';

import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenu';

export default {
    title: 'Pages/Cards/Viewer',
    component: CardViewerPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {

    return (
        <>
            <CardViewerPage
                {...args}
                userData={mockUser}
                isLoading={false}
            />
        </>
    );
};

export const Default = Template.bind({});
