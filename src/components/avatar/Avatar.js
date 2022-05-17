import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Avatar({ user }) {
  return (
    <div className="user-info__imgcontainer">
      {user.avatarURL ? (
        <img
          className="user-info__avatar avatar"
          src={user.avatarURL}
          alt={user.fullname}
        />
      ) : (
        <FaUserCircle />
      )}
    </div>
  );
}

export default Avatar;
