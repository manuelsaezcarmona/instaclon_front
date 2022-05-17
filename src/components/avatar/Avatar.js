import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AVATAR_SIZE_CLASSNAME } from '../../constants/index';

function Avatar({ user, size = '' }) {
  const avatarSizeClassName = AVATAR_SIZE_CLASSNAME[size] || '';
  const avatarClassName = `avatar ${avatarSizeClassName}`;

  return user.avatarURL ? (
    <img className={avatarClassName} src={user.avatarURL} alt={user.fullname} />
  ) : (
    <FaUserCircle />
  );
}

export default Avatar;
