import { useEffect, useState } from 'react';

export const useModalContentWindow = ({ show, onAction, onCancel }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleShowDelay = () => {
        setFadeOut(true);

        setTimeout(() => {
            onCancel();
            setFadeOut(false);
        }, 500);
    };

    useEffect(() => {
        const handleKeyEvent = (e) => {
            if (show) {
                if (e.keyCode === 27) {
                    handleShowDelay();
                }
                if (e.keyCode === 13) {
                    onAction();
                }
            }
        };

        window.document.addEventListener('keydown', handleKeyEvent);

        return () => {
            window.document.removeEventListener('keydown', handleKeyEvent);
        };
    }, [show, onAction, onCancel]);

    return { fadeOut, handleShowDelay };
};
