import React from 'react';

import { Cards } from './Cards';
import { Layout } from '../../components/Layout';
import { ModalInfoWindow } from '../../components/ModalInfoWindow';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

import mockUser from './../../data/mockUser';

export default {
    title: 'Pages/Cards',
    component: Cards,
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
                onAction={() => alert("[NOT IMPLEMENTED]")}
                title="Wollen sie sich wirklich ausloggen?"
                body=""
                cancelText={"Abbrechen"}
                actionText={"Ausloggen"}
            />
            <Layout userData={mockUser} onLogoutAction={() => setShowWindow(true)}>
                <Cards {...args} userData={mockUser} isLoading={false} />
            </Layout>
        </>
    );
};

export const Default = Template.bind({});
