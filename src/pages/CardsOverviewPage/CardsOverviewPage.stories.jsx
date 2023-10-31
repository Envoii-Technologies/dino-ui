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
                type="secondary"
            >
                <CardsOverviewPage
                    {...args}
                    userData={mockUser}
                    tagData={tagList}
                    isLoading={false}
                    cardsData={mockCards}
                    onSaveNewCard={(data) => console.log(data)}
                />
            </Layout>
        </>
    );
};

export const Default = Template.bind({});
