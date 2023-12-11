import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Button, Heading, Text } from '../../';

import './CardViewerHeader.scss';

export const CardViewerHeader = ({ className, title, onClose, ...props }) => {
    const handleOnClose = () => {
        onClose();
    };
    return (
        <>
            <div className={`CardViewerHeader ${className || ''}`}>
                <div className="CardViewerHeader--mobile">
                    <span
                        className="CardViewerContent__header--mobile__backlink"
                        onClick={handleOnClose}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                        &nbsp;
                        <Text size="sm" type="semiBold">
                            Zurück
                        </Text>
                    </span>
                    <Heading size="xs" type="semiBold">
                        {title}
                    </Heading>
                </div>
                <div className="CardViewerHeader--desktop">
                    <Heading size="lg" type="semiBold">
                        {title}
                    </Heading>
                    <Button
                        size="md"
                        type="secondary"
                        iconLeft={faClose}
                        onClick={handleOnClose}
                    />
                </div>
            </div>
        </>
    );
};

CardViewerHeader.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
    title: PropTypes.string,
};

CardViewerHeader.defaultProps = {
    className: undefined,
    title: "Default Title"
};
