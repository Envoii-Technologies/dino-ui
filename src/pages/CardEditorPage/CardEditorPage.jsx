import React, { useState } from 'react';

import {
    Button,
    ButtonGroup,
    LoadingIndicator,
    PageHeader,
    Tabs,
    TabItem,
} from './../../';

import {
    faEllipsisVertical,
    faRocket,
} from '@fortawesome/free-solid-svg-icons';

import './CardEditorPage.scss';
import { InformationTab } from './InformationTab';
import { StepsTab } from './StepsTab';

export const CardEditorPage = ({ isLoading, tagData, cardData, currentTab, onSave }) => {

    const [currentCardData, setCurrentCardData] = useState(cardData);

    const handleOnSave = () => {
        onSave(currentCardData);
    }

    const changeCurrentCardStepsData = (steps) =>
    {
        setCurrentCardData(prev => ({...prev, steps: steps}))
    }

    return (
        <>
            {isLoading ? (
                <LoadingIndicator showLabel={true} />
            ) : (
                <>
                    <header>
                        <PageHeader
                            title={currentCardData.title}
                            location="/acme/Karten/Hydraulikpresse"
                        >
                            <ButtonGroup>
                                <Button
                                    label="Speichern"
                                    type="secondary"
                                    onClick={handleOnSave}
                                />
                                <Button
                                    label="Veröffentlichen"
                                    iconRight={faRocket}
                                />
                                <Button
                                    iconLeft={faEllipsisVertical}
                                    type="secondary"
                                />
                            </ButtonGroup>
                        </PageHeader>
                    </header>
                    <Tabs currentSelected={currentTab || 0}>
                        <TabItem title="Schritte">
                            <StepsTab stepsData={currentCardData.steps} onChangeData={(data) => changeCurrentCardStepsData(data)}/>
                        </TabItem>
                        <TabItem title="Informationen">
                            <InformationTab tagData={tagData} cardData={currentCardData}/>
                        </TabItem>
                    </Tabs>
                </>
            )}
        </>
    );
};
