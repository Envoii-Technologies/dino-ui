import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, RichUtils, ContentState, convertFromHTML } from 'draft-js';


import { Button, ButtonGroup } from './../../';
import { faBold, faHeading, faIndent, faItalic, faListOl, faListUl, faOutdent, faStrikethrough, faUnderline } from '@fortawesome/free-solid-svg-icons';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.scss';

export const TextEditor = ({ className, initialContent, onChange, placeholder, ...props }) => {
	const createEditorState = (content) => {
		if (typeof content === 'string') {
			const blocksFromHTML = convertFromHTML(content);
			const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
			return EditorState.createWithContent(contentState);
		}
		return EditorState.createEmpty();
	};

	const [editorState, setEditorState] = useState(createEditorState(initialContent));

	useEffect(() => {
		if (editorState) {
			const htmlContent = convertEditorStateToHTML(editorState);
			onChange(htmlContent);
		}
	}, [editorState]);

	const handleKeyCommand = (command) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);
		if (newState) {
			setEditorState(newState);
			return 'handled';
		}
		return 'not-handled';
	};

	const onStyleClick = (style) => {
		setEditorState(RichUtils.toggleInlineStyle(editorState, style));
	};

	const onToggleBlockType = (blockType) => {
		setEditorState(RichUtils.toggleBlockType(editorState, blockType));
	};

	const adjustDepth = (adjustment) => {
		setEditorState(RichUtils.adjustBlockDepth(editorState, adjustment, 4));
	};

	const onEditorStateChange = (newState) => {
		setEditorState(newState);
		const htmlContent = convertEditorStateToHTML(newState);
		onChange(htmlContent);
	};

	const convertEditorStateToHTML = (editorState) => {
		const contentState = editorState.getCurrentContent();
		let html = '';
		let isInsideList = false;
		let currentListType = null;

		contentState.getBlockMap().forEach((block) => {
			let blockHTML = '';
			let blockText = block.getText();
			const blockType = block.getType();

			block.findStyleRanges(
				(character) => true,
				(start, end) => {
					const styles = block.getInlineStyleAt(start).toSet();
					let textSegment = blockText.substring(start, end);

					if (styles.has('BOLD')) {
						textSegment = `<strong>${textSegment}</strong>`;
					}
					if (styles.has('ITALIC')) {
						textSegment = `<em>${textSegment}</em>`;
					}
					if (styles.has('UNDERLINE')) {
						textSegment = `<u>${textSegment}</u>`;
					}
					if (styles.has('STRIKETHROUGH')) {
						textSegment = `<s>${textSegment}</s>`;
					}

					blockHTML += textSegment;
				}
			);

			if (blockType === 'unordered-list-item' || blockType === 'ordered-list-item') {
				if (!isInsideList || currentListType !== blockType) {
					if (isInsideList) {
						html += currentListType === 'unordered-list-item' ? '</ul>' : '</ol>';
					}
					html += blockType === 'unordered-list-item' ? '<ul>' : '<ol>';
					isInsideList = true;
					currentListType = blockType;
				}
				html += `<li>${blockHTML}</li>`;
			} else {
				if (isInsideList) {
					html += currentListType === 'unordered-list-item' ? '</ul>' : '</ol>';
					isInsideList = false;
				}

				switch (blockType) {
					case 'header-one':
						html += `<h1>${blockHTML}</h1>`;
						break;
					case 'header-two':
						html += `<h2>${blockHTML}</h2>`;
						break;
					case 'header-three':
						html += `<h3>${blockHTML}</h3>`;
						break;
					default:
						html += `<p>${blockHTML}</p>`;
				}
			}
		});

		if (isInsideList) {
			html += currentListType === 'unordered-list-item' ? '</ul>' : '</ol>';
		}

		return html;
	};

	return (
		<div className={`TextEditor ${ className || ''}`}>
			<div className="TextEditor__buttons">
				<ButtonGroup
					className="TextEditor__buttons__group"
					compact={true}
					fluid={false}
				>
					<Button type="secondary" iconLeft={faBold} onClick={() => onStyleClick('BOLD')} />
					<Button type="secondary" iconLeft={faItalic} onClick={() => onStyleClick('ITALIC')} />
					<Button type="secondary" iconLeft={faUnderline} onClick={() => onStyleClick('UNDERLINE')} />
					<Button type="secondary" iconLeft={faStrikethrough} onClick={() => onStyleClick('STRIKETHROUGH')} />
					<Button type="secondary" iconLeft={faListOl} onClick={() => onToggleBlockType('ordered-list-item')} />
					<Button type="secondary" iconLeft={faListUl} onClick={() => onToggleBlockType('unordered-list-item')} />
					<Button type="secondary" iconLeft={faHeading} onClick={() => onToggleBlockType('header-three')} />
					<Button type="secondary" iconLeft={faOutdent} onClick={() => adjustDepth(1)} />
					<Button type="secondary" iconLeft={faIndent} onClick={() => adjustDepth(-1)} />
				</ButtonGroup>
			</div>
			<Editor
				editorClassName="TextEditor__content"
				editorState={editorState}
				handleKeyCommand={handleKeyCommand}
				onEditorStateChange={onEditorStateChange}
				toolbarHidden={true}
				placeholder={placeholder}
			/>
		</div>
	)
}

TextEditor.propTypes =
{
	/**
	 * Custom class name of Component
	 */
	className: PropTypes.string,
	/**
	 * Initial value content displayed in textarea
	 */
	initialContent: PropTypes.string,
	/**
	 * function called when content is changed
	 */
	onChange: PropTypes.func,
	/**
	 * Placeholder text
	 */
	placeholder: PropTypes.string,
};

TextEditor.defaultProps =
{
	className: undefined,
	initialContent: undefined,
	onChange: undefined,
	placeholder: undefined,
};
