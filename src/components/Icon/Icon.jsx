import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';

  export const Icon = ({ className, name, width, height, color, outline, ...props }) => {
  let IconComponent = null;

  try {
    // Versuche, die SVG-Komponente synchron zu importieren
    IconComponent = require(`./icons/${name}`).default;
  } catch (error) {
    console.error(`Error loading SVG component for ${name}:`, error);
  }

  if (!IconComponent) {
    return <p>ok</p> // Zeige nichts, wenn das Laden fehlgeschlagen ist
  }

  return (
    <div>
        <IconComponent className={`Icon ${className || ''}`} width={width} height={height} color={color} outline={outline} {...props} />
    </div>
  );
};

Icon.propTypes = {
  /**
   * Custom class name of Component
   */
  className: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  outline: PropTypes.bool
};

Icon.defaultProps = {
  className: undefined,
  name: 'AlertsFeedback/AlertHexagon',
  width: 24,
  height: 24,
  color: 'red',
  outline: false,
};