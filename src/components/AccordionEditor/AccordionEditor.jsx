import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Text } from './../../index';

import { useAccordionEditor } from './useAccordionEditor';

import './AccordionEditor.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faGripVertical, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export const AccordionEditor = ({ className, initialList, initialOpenMenus, onChangeList, ...props }) => {
	const {
		lists,
		onDragEnd,
		openMenus,
		toggleMenu,
		deleteItem,
		addItemToList,
		addList,
		deleteList,
		handleListNameChange,
		handleItemNameChange,
		focusedListIndex,
	} = useAccordionEditor(initialList, initialOpenMenus);

	useEffect(() => {
        onChangeList({
			lists: lists,
			open: openMenus
		})
    }, [lists, openMenus]);

	useEffect(() => {
		if (focusedListIndex !== null) {
			const { listIndex, itemIndex } = focusedListIndex;
			const inputElement = document.getElementById(`listEntryNameInput${listIndex}-${itemIndex}`);
			if (inputElement) {
				inputElement.focus();
			}
		}
	}, [focusedListIndex]);

	useEffect(() => {
		if (focusedListIndex !== null) {
			const { listIndex } = focusedListIndex;
			const inputElement = document.getElementById(`listNameInput${listIndex}`);

			if (inputElement) {
				inputElement.focus();
			}
		}
	}, [focusedListIndex, lists]);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={`AccordionEditor ${className || ''}`} {...props}>

				<div className='AccordionEditor__newList'>
					<button className='AccordionEditor__newList Item' onClick={addList}>
						<FontAwesomeIcon className='AccordionEditor__newList__icon' icon={faPlus} />
						<Text>Klasse hinzufügen</Text>
					</button>
				</div>

				{
					lists.map((list, listIndex) => (
						<div
							className='AccordionEditor__list'
							key={listIndex}
						>
							<div className='AccordionEditor__list__name'>
								<div className="AccordionEditor__list__name__wrapper Item">
									<input
										type="text"
										value={list.name}
										onChange={(e) => handleListNameChange(listIndex, e.target.value)}
										id={`listNameInput${listIndex}`}
										placeholder="Neue Liste"
									/>

									<button className='AccordionEditor__list__name__toggle' onClick={() => toggleMenu(listIndex)}>
										<FontAwesomeIcon

											icon={openMenus[listIndex] ? faChevronUp : faChevronDown}
										/>
									</button>
								</div>

								<button className='AccordionEditor__list__name__delete'>
									{
										list.items.length === 0 &&
										(
											<FontAwesomeIcon icon={faTrash} onClick={() => deleteList(listIndex)} />
										)
									}
								</button>

							</div>

							<Droppable droppableId={`list${listIndex}`}>
								{(provided) => (
									<div
										className='AccordionEditor__list__sublist'
										ref={provided.innerRef}
										{...provided.droppableProps}
										style={{
											display: openMenus[listIndex] ? 'block' : 'none',
										}}
									>
										<div className='AccordionEditor__list__sublist__newItem'>
											<button className='AccordionEditor__list__sublist__newItem__item Item' onClick={() => addItemToList(listIndex)}>
												<FontAwesomeIcon className='AccordionEditor__list__sublist__newItem__icon' icon={faPlus} />
												<Text>Klassenmerkmal definieren</Text>
											</button>
										</div>
										
										{list.items.map((item, itemIndex) => (
											<Draggable key={item.id} draggableId={item.id} index={itemIndex}>
												{(provided) => (
													<div
														className='AccordionEditor__list__sublist__item'
														ref={provided.innerRef}
														{...provided.draggableProps}
														style={{
															...provided.draggableProps.style,
														}}
													>
														<div className="AccordionEditor__list__sublist__item__wrapper Item">
															<input
																type="text"
																value={item.content}
																onChange={(e) => handleItemNameChange(listIndex, itemIndex, e.target.value)}
																id={`listEntryNameInput${listIndex}-${itemIndex}`}
																placeholder='Neues Merkmal'
															/>
															<div className="AccordionEditor__list__sublist__item__wrapper__drag"

																{...provided.dragHandleProps}
															>
																<FontAwesomeIcon icon={faGripVertical} />
															</div>
														</div>
														<span
															className='AccordionEditor__list__sublist__item__wrapper__delete'
															onClick={() => deleteItem(listIndex, itemIndex)}
														>
															<FontAwesomeIcon icon={faTrash} onClick={() => deleteList(listIndex)} />
														</span>
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
										
									</div>
								)}
							</Droppable>
						</div>
					))}
			</div>
		</DragDropContext>
	);
};

AccordionEditor.propTypes = {
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Initial lists for the AccordionEditor
	 */
	initialList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			items: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.string.isRequired,
					content: PropTypes.string.isRequired,
				})
			).isRequired,
		})
	).isRequired,
	initialOpenMenus: PropTypes.array,
	onChangeList: PropTypes.func,
};

AccordionEditor.defaultProps = {
	className: undefined,
	initialList: [],
	initialOpenMenus: undefined,
	onChangeList: (data) => console.log(data)
};
