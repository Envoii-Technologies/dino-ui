import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    ButtonGroup,
    LoadingIndicator,
    PageHeader,
    Tabs,
    ModalInfoWindow,
    TabItem,
    OverflowMenu,
} from './../../';

import {
    faClose,
    faRocket,
    faTrash,
    faWarning,
} from '@fortawesome/free-solid-svg-icons';

import './CardEditorPage.scss';
import { InformationTab } from './InformationTab';
import { StepsTab } from './StepsTab';

export const CardEditorPage = ({
    isLoading,
    tagData,
    cardData,
    currentTab,
    onSave,
    onDelete,
    onClose,
    uploadParameters,
    tenant,
    onRelease,
}) => {
    const [currentCardData, setCurrentCardData] = useState(cardData);

    const [showDeleteWindow, setShowDeleteWindow] = useState(false);

    const handleOnSave = () => {
        onSave(currentCardData);
    };

    const handleOnRelease = () => {
        alert('[NOT IMPLEMENTED]');
    };

    const handleOnClose = () => {
        onClose();
    };

    const handleOnDelete = () => {
        setShowDeleteWindow(true);
    };

    const changeCurrentCardStepsData = (steps) => {
        setCurrentCardData((prev) => ({ ...prev, steps: steps }));
    };

    return (
        <>
            {isLoading ? (
                <LoadingIndicator showLabel={true} />
            ) : (
                <>
                    <ModalInfoWindow
                        icon={faWarning}
                        show={showDeleteWindow}
                        type="error"
                        onCancel={() => setShowDeleteWindow(false)}
                        onAction={() => onDelete(currentCardData._id)}
                        title="Wollen sie diese Karte wirklich löschen?"
                        body=""
                        cancelText={'Abbrechen'}
                        actionText={'Löschen'}
                    />
                    <header>
                        <PageHeader
                            title={currentCardData.title}
                            location={{
                                home: {
                                    path: `/${tenant}`
                                },
                                prev: {
                                    title: "Karten",
                                    path: "/cards"
                                },
                                current: {
                                    title: currentCardData.title,
                                    path: currentCardData.slug
                                }  
                            }}
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
                                    onClick={handleOnRelease}
                                />
                                <OverflowMenu
                                    anchor="below-right"
                                    ellipsis={true}
                                    label="Optionen"
                                    content={[
                                        [
                                            {
                                                title: 'Schließen',
                                                icon: faClose,
                                                onClick: () => handleOnClose()
                                            },
                                            {
                                                title: 'Löschen',
                                                icon: faTrash,
                                                dangerous: true,
                                                onClick: () => handleOnDelete(),
                                            },
                                        ],
                                    ]}
                                />
                            </ButtonGroup>
                        </PageHeader>
                    </header>
                    <Tabs currentSelected={currentTab || 0}>
                        <TabItem title="Schritte">
                            <StepsTab
                                uploadParameters={uploadParameters}
                                stepsData={currentCardData.steps}
                                onChangeData={(data) =>
                                    changeCurrentCardStepsData(data)
                                }
                            />
                        </TabItem>
                        <TabItem title="Informationen">
                            <InformationTab
                                tagData={tagData}
                                cardData={currentCardData}
                            />
                        </TabItem>
                    </Tabs>
                </>
            )}
        </>
    );
};

CardEditorPage.propTypes = {
    uploadParameters: PropTypes.shape({
        url: PropTypes.string.isRequired,
    }),
};

CardEditorPage.defaultProps = {
    uploadParameters: { url: "" }
};