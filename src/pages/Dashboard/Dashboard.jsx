import React from 'react';

import { PageHeader } from './../../components/PageHeader';

export const Dashboard = ({ isLoading, userData }) => {
    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    <PageHeader
                        title={`Willkommen, ${userData.firstname} 👋`}
                    >
                        
                    </PageHeader>
                </>
            )}
        </>
    );
};
