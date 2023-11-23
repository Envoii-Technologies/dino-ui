import React from 'react';

import { CardsOverviewPage } from './CardsOverviewPage';
import { Layout } from '../../components/Layout';
import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';
import mockMenu from './../../data/mockMenu';
import mockCards from './../../data/mockCards';
import tagList from './../../data/tags';

export default {
    title: 'Pages/Cards/Overview',
    component: CardsOverviewPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template1 = (args) => {
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
                type="secondary"
            >
                <CardsOverviewPage
                    {...args}
                    tenant="acme"
                    cardList={mockCards}
                    userRole={"app_admin"}
                    isLoading={false}
                    onCreateCard={() => alert('[NOT IMPLEMENTED]')}
                    onDeleteCard={() => alert('[NOT IMPLEMENTED]')}
                />
            </Layout>
        </>
    );
};

const Template2 = (args) => {
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
                type="secondary"
            >
                <CardsOverviewPage
                    {...args}
                    tenant="acme"
                    cardList={mockCards}
                    isLoading={false}
                    userRole={"app_user"}
                    onCreateCard={() => alert('[NOT IMPLEMENTED]')}
                    onDeleteCard={() => alert('[NOT IMPLEMENTED]')}
                />
            </Layout>
        </>
    );
};

export const AsEditor = Template1.bind({});
export const AsUser = Template2.bind({});
