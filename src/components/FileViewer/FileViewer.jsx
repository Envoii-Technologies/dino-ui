import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { OverflowMenu, ProgressBar } from '../../';
import { faClose, faPaperclip } from '@fortawesome/free-solid-svg-icons';

import { useFileViewer } from './useFileViewer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FileViewer.scss';

export const FileViewer = ({
    className,
    uploadUrl,
    onUpload,
    onDelete,
    initialFiles = [],
    maxFiles,
    ...props
}) => {
    const {
        selectedFiles,
        previewURLs,
        message,
        status,
        handleFilesChange,
        handleDelete,
        handleSubmit,
    } = useFileViewer({ uploadUrl, onUpload, onDelete, initialFiles, maxFiles });
    const fileInput = useRef(null);

    return (
        <>
            <div className="FileViewer">
                <div className="FileViewer__preview">
                    {previewURLs.length === 0 && (
                        <div className="FileViewer__preview__empty">
                            <FontAwesomeIcon icon={faPaperclip} />
                            &nbsp; klicken, um Medien hinzuzufügen.
                        </div>
                    )}
                    {previewURLs.map((url, index) => {
                        const fileType = selectedFiles[index].file.type;
                        const fileStatus = selectedFiles[index].status;

                        if (
                            fileType === 'application/pdf' ||
                            fileType === 'video/mov' ||
                            fileType === 'video/mpeg'
                        ) {
                            return (
                                <div
                                    key={index}
                                    className="FileViewer__preview__file"
                                >
                                    <button
                                        className="FileViewer__preview__delete"
                                        onClick={() =>
                                            handleDelete(selectedFiles[index])
                                        }
                                    >
                                        <FontAwesomeIcon icon={faClose} />
                                    </button>

                                    <ProgressBar
                                        fluid={true}
                                        progress={fileStatus === 'done' ? 100 : 0}
                                        error={fileStatus !== 'done'}
                                        success={fileStatus === 'done'}
                                    />
                                    {fileType.split('/')[1]}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    className="FileViewer__preview__image"
                                >
                                    <button
                                        className="FileViewer__preview__delete"
                                        onClick={() =>
                                            handleDelete(selectedFiles[index])
                                        }
                                    >
                                        <FontAwesomeIcon icon={faClose} />
                                    </button>

                                    <ProgressBar
                                       fluid={true}
                                       progress={fileStatus === 'done' ? 100 : 0}
                                       error={fileStatus !== 'done'}
                                       success={fileStatus === 'done'}
                                    />
                                    <img src={url} alt={`Vorschau ${index}`} />
                                </div>
                            );
                        }
                    })}
                    <form onSubmit={handleSubmit} style={{ display: 'none' }}>
                        <input
                            type="file"
                            ref={fileInput}
                            multiple
                            name="files"
                            onChange={handleFilesChange}
                        />
                        <button type="submit">Hochladen</button>
                    </form>
                </div>
                <OverflowMenu
                    anchor="below-right"
                    ellipsis={false}
                    icon={faPaperclip}
                    label=""
                    content={ !(previewURLs.length >= maxFiles) ? [
                        [
                            {
                                title: 'Vom Gerät hochladen',
                                onClick: () => fileInput.current.click(),
                            },
                            {
                                title: 'Aus Medien Hinzufügen',
                                disabled: true,
                            },
                        ],
                    ] : []}
                />
            </div>
        </>
    );
};

FileViewer.propTypes = {
    uploadUrl: PropTypes.string,
    maxFiles: PropTypes.number,
};

FileViewer.defaultProps = {
    uploadUrl: 'https://httpbin.org/post',
    maxFiles: 5,
};
