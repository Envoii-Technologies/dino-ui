import React, { useState, useEffect, useRef, createRef } from 'react';

export const useAccordionEditor = (initialList, initialOpenMenus) => {
    const [lists, setLists] = useState(initialList);
    const [openMenus, setOpenMenus] = useState(initialOpenMenus || Array(initialList.length).fill(false));
    const [newItemContents, setNewItemContents] = useState(Array(initialList.length).fill(''));
    const [focusedListIndex, setFocusedListIndex] = useState(null);

    useEffect(() => {
        handleListChange()
    }, [lists]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const updatedLists = [...lists];
        const sourceListIndex = result.source.droppableId.replace('list', '');
        const destinationListIndex = result.destination.droppableId.replace('list', '');

        const movedItem = updatedLists[sourceListIndex].items[result.source.index];
        updatedLists[sourceListIndex].items.splice(result.source.index, 1);
        updatedLists[destinationListIndex].items.splice(result.destination.index, 0, movedItem);

        setLists(updatedLists);
    };

    const handleItemNameChange = (listIndex, itemIndex, value) => {
        setLists((prevLists) => {
            const updatedLists = [...prevLists];
            updatedLists[listIndex].items[itemIndex] = {
                ...updatedLists[listIndex].items[itemIndex],
                content: value,
            };
            return updatedLists;
        });
    }

    const toggleMenu = (index) => {
        const updatedOpenMenus = [...openMenus];
        updatedOpenMenus[index] = !updatedOpenMenus[index];
        setOpenMenus(updatedOpenMenus);
    };

    const deleteItem = (listIndex, itemIndex) => {
        const updatedLists = [...lists];
        updatedLists[listIndex].items.splice(itemIndex, 1);
        setLists(updatedLists);
    };
    
    const addItemToList = (listIndex) => {
        const updatedLists = [...lists];
        const content = newItemContents[listIndex].trim();
        const newItem = { id: Date.now().toString(), content: "" };
    
        updatedLists[listIndex].items.unshift(newItem);
        setLists(updatedLists);
        setNewItemContents((prevContents) => {
            const newContents = [...prevContents];
            newContents[listIndex] = '';
            return newContents;
        });
    
        // Debugging-Logs
        // console.log('Adding item to list:', listIndex);
        // console.log('New item:', newItem);
    
        // Setzen Sie den Fokus auf das neu erstellte Element
        setTimeout(() => {
            const inputElement = document.getElementById(`listEntryNameInput${listIndex}-${0}`);
            // console.log('Input element:', inputElement);
            if (inputElement) {
                inputElement.focus();
                // console.log('Focusing on input element.');
            } else {
                console.log('Input element not found.');
            }
        }, 0);
    };

    const handleNewItemChange = (listIndex, value) => {
        setNewItemContents((prevContents) => {
            const newContents = [...prevContents];
            newContents[listIndex] = value;
            return newContents;
        });
    };

    const addList = () => {
        const newList = {
            name: '',
            items: [],
        };
    
        setLists((prevLists) => [newList, ...prevLists]);
        setOpenMenus((prevOpenMenus) => [true, ...prevOpenMenus]);
        setNewItemContents((prevContents) => [...prevContents, '']);
    
        // Setzen Sie den Fokus auf das neu erstellte Listenelement nach dem Rendern
        setTimeout(() => {
            const inputElement = document.getElementById(`listNameInput${0}`);
            if (inputElement) {
                inputElement.focus();
            }
        }, 0);
    };

    const deleteList = (listIndex) => {
        if (lists[listIndex].items.length === 0) {
            const updatedLists = [...lists];
            updatedLists.splice(listIndex, 1);
            setLists(updatedLists);
            const updatedOpenMenus = [...openMenus];
            updatedOpenMenus.splice(listIndex, 1);
            setOpenMenus(updatedOpenMenus);
            const updatedNewItemContents = [...newItemContents];
            updatedNewItemContents.splice(listIndex, 1);
            setNewItemContents(updatedNewItemContents);
        }
    };

    const handleListNameChange = (listIndex, value) => {
        setLists((prevLists) => {
            const updatedLists = [...prevLists];
            updatedLists[listIndex] = { ...updatedLists[listIndex], name: value };
            return updatedLists;
        });
    };

    const handleListChange = () => {
        return lists;
    }

    return {
        lists,
        onDragEnd,
        openMenus,
        toggleMenu,
        deleteItem,
        addItemToList,
        addList,
        newItemContents,
        handleNewItemChange,
        deleteList,
        handleListNameChange,
        handleItemNameChange,
        focusedListIndex,
    };
};