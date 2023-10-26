import React from 'react';

import { CardsPage } from './CardsPage';
import { Layout } from '../../components/Layout';
import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';
import tagList from './../../data/tags';

export default {
    title: 'Pages/Cards/Overview',
    component: CardsPage,
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
                onLogoutAction={() => setShowWindow(true)}
                type="secondary"
            >
                <CardsPage
                    {...args}
                    userData={mockUser}
                    tagData={tagList}
                    isLoading={false}
                    onSaveNewCard={(data) => console.log(data)}
                />
            </Layout>
        </>
    );
};

export const Default = Template.bind({});
