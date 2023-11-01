import React from 'react';
import PropTypes from 'prop-types';
import { Dot } from './../../';
import placeholderImage from './../../assets/images/userPlaceholder.svg';
import './Avatar.scss';

import { getFirstLetters } from './../../utils';

const AvatarSizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export const Avatar = ({ className, name, size, type, status, ...props }) => {

  const renderContent = () => {
    if (type === 'placeholder') {
      return (
        <img
          className="Avatar__image"
          src={placeholderImage}
          alt="user-image"
          style={{ display: 'flex' }}
        />
      );
    } else {
      return <div className="Avatar__name">{getFirstLetters(name)}</div>;
    }
  };

  return (
    <div
      className={`
        Avatar ${className ? className : ''}
        size-${size}
      `}
      {...props}
    >
      {renderContent()}
      {status !== 'none' && (
        <div className="Avatar__status">
          <Dot size={size} state={status} />
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(AvatarSizes)),
  type: PropTypes.oneOf(['placeholder', 'text']),
  status: PropTypes.oneOf(['none', 'success', 'warning', 'error', 'offline']),
  name: PropTypes.string,
};

Avatar.defaultProps = {
  className: undefined,
  size: AvatarSizes.md,
  type: 'text',
  status: 'none',
  name: 'Jane Doe',
};
