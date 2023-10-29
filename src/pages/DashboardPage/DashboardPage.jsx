import React from 'react';

import { PageHeader } from './../../components/PageHeader';

export const DashboardPage = ({ isLoading, userData }) => {
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
