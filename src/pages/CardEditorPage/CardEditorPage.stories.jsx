import React from 'react';

import { CardEditorPage } from './CardEditorPage';
import { Layout } from '../../components/Layout';
import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';
import mockCard from './../../data/mockCard';
import mockMenu from './../../data/mockMenu';
import tagList from './../../data/tags';

export default {
    title: 'Pages/Cards/Editor',
    component: CardEditorPage,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => {
    const [showWindow, setShowWindow] = React.useState(false);

    console.log(args);

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
                isExpanded={false}
            >
                <CardEditorPage
                    {...args}
                    cardData={mockCard}
                    currentTab={0}
                    isLoading={false}
                    tagData={tagList}
                    onSave={(data) => {console.log(data); alert("[NOT IMPLEMENTED]"); }}
                    onDelete={(data) => alert("[NOT IMPLEMENTED] - id: " + data)}
                    onRelease={() => alert("[NOT IMPLEMENTED]")}
                    onClose={() => alert("[NOT IMPLEMENTED]")}
                />
            </Layout>
        </>
    );
};

export const Schritte = Template.bind();

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
                isExpanded={false}
            >
                <CardEditorPage
                    {...args}
                    cardData={mockCard}
                    currentTab={1}
                    isLoading={false}
                    tagData={tagList}
                    onSave={(data) => {console.log(data); alert("[NOT IMPLEMENTED]"); }}
                    onDelete={(data) => alert("[NOT IMPLEMENTED] - id: " + data)}
                    onRelease={() => alert("[NOT IMPLEMENTED]")}
                    onClose={() => alert("[NOT IMPLEMENTED]")}
                />
            </Layout>
        </>
    );
};

export const Informationen = Template2.bind();
