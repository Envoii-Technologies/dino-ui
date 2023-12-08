import React from 'react';

import { MediaPage } from './MediaPage';
import { Layout } from '../../components/Layout';

import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenu';

export default {
    title: 'Pages/Media',
    component: MediaPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    const [showWindow, setShowWindow] = React.useState(false);

    return (
        <>
            <ModalInfoWindow
                {...args}
                icon={faInfo}
                show={showWindow}
                type="error"
                onCancel={() => setShowWindow(false)}
                onAction={() => alert('[NOT IMPLEMENTED]')}
                title="Wollen sie sich wirklich ausloggen?"
                body=""
                cancelText={'Abbrechen'}
                actionText={'Ausloggen'}
            />
            <Layout
                userData={mockUser}
                menuData={mockMenu}
                onLogoutAction={() => setShowWindow(true)}
            >
                <MediaPage
                    {...args}
                    userData={mockUser}
                    isLoading={false}
                />
            </Layout>
        </>
    );
};

export const Default = Template.bind({});
