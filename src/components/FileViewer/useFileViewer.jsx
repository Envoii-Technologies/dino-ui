import React, { useState, useEffect } from 'react';
import './FileViewer.scss';

export const useFileViewer = ({
    uploadUrl,
    onUpload,
    onDelete,
    initialFiles,
    maxFiles,
}) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [previewURLs, setPreviewURLs] = useState(initialFiles);
    const [shouldUpload, setShouldUpload] = useState(false);

    const fileTypes = [
        '.pdf',
        '.png',
        '.jpg',
        '.jpeg',
        '.svg',
        '.mov',
        '.mpeg',
    ];

    const handleDelete = (file) => {
        onDelete(file);
    };

    useEffect(() => {
        if (shouldUpload) {
            handleSubmit();
            setShouldUpload(false); // Setzen Sie es zurück, nachdem der Upload-Versuch unternommen wurde
        }
    }, [shouldUpload]);

    const handleFilesChange = (e) => {
        const files = Array.from(e.target.files);
        const remainingSlots = maxFiles - previewURLs.length;

        let validFiles = [];
        let validURLs = [];

        setShouldUpload(true);

        files.slice(0, remainingSlots).forEach((file) => {
            const fileExtension =
                '.' + file.name.split('.').pop().toLowerCase();
            if (fileTypes.includes(fileExtension)) {
                validFiles.push({ file, status: 'pending' });
                validURLs.push(URL.createObjectURL(file));
            }
        });

        setSelectedFiles((prevSelectedFiles) => [
            ...prevSelectedFiles,
            ...validFiles,
        ]);
        setPreviewURLs((prevURLs) => [...prevURLs, ...validURLs]);

        setMessage(
            `Ausgewählte Dateien: ${validFiles
                .map((file) => file.name)
                .join(', ')}`
        );
    };

    const handleSubmit = async (e) => {
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((fileObj) => {
                formData.append('files', fileObj.file);
            });

            try {
                const response = await fetch(uploadUrl, {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Serverantwort:', data);
                    setMessage('Dateien erfolgreich hochgeladen!');
                    setSelectedFiles((prevFiles) =>
                        prevFiles.map((fileObj) => ({
                            ...fileObj,
                            status: 'done',
                        }))
                    );
                    onUpload(data.files);
                } else {
                    console.log('Dateiupload fehlgeschlagen.');
                    setMessage('Dateiupload fehlgeschlagen.');
                    setSelectedFiles((prevFiles) =>
                        prevFiles.map((fileObj) => ({
                            ...fileObj,
                            status: 'error',
                        }))
                    );
                }
            } catch (error) {
                console.error('Fehler beim Hochladen der Datei:', error);
                setMessage('Dateiupload fehlgeschlagen.');
                setSelectedFiles((prevFiles) =>
                    prevFiles.map((fileObj) => ({
                        ...fileObj,
                        status: 'error',
                    }))
                );
            }
        } else {
            console.log('Keine gültige Datei ausgewählt.');
            setMessage('Keine gültige Datei ausgewählt.');
        }
    };

    return {
        selectedFiles,
        previewURLs,
        message,
        status,
        handleFilesChange,
        handleSubmit,
        handleDelete,
    };
};
