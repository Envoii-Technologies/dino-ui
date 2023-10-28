import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Dropzone from 'react-dropzone-uploader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

import './FileUploader.scss';

export const FileUploader = ({ className, onUploaded, ...props }) => {
    const getUploadParams = ({ meta }) => {
        const url = 'https://httpbin.org/post';
        const fileUrl = `${url}/${encodeURIComponent(meta.name)}`;
        return { url, meta: { fileUrl } };
    };

    const handleSubmit = (files) => {
        console.log(files.map((f) => f.meta));
    };

    const handleChangeStatus = async ({ meta, file }, status) => {

        if(await status === "done")
        {
            onUploaded({ file: file.name, type: file.type, createdAt: file.lastModified });
        }
    };

    const Layout = ({
        input,
        previews,
        submitButton,
        dropzoneProps,
        files,
        extra: { maxFiles },
    }) => {
        return (
            <div className="FileUploader dzu-dropzone">
                {previews}

                <div {...dropzoneProps} className="FileUploader__zone">
                    {input}
                </div>

                {files.length > 0 && submitButton}
            </div>
        );
    };

    const InputElement = () => {
        return (
            <>
                <div className="FileUploaderInput">
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                    <div className="FileUploaderInput__title">
                        <span className="FileUploaderInput__title__bold">
                            Dateien auswählen
                        </span>
                        oder hier ablegen
                    </div>
                    <div className="FileUploaderInput__subTitle">
                        Bilder, Videos und PDF (max. 10MB)
                    </div>
                </div>
            </>
        )
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            // onSubmit={handleSubmit}
            accept="image/*,video/*,.pdf"
            inputContent={InputElement}
            LayoutComponent={Layout}
            
            styles={{ dropzone: { minHeight: "7.5rem" } }}
            // autoUpload={true}
        />
    );
};


FileUploader.propTypes = {
    onUploaded: PropTypes.func,
};

FileUploader.defaultProps = {
    onUploaded: () => alert('[NOT IMPLEMENTED]'),
};