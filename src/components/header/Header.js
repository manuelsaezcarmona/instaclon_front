import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import Avatar from '../avatar/Avatar';

function Header({ user }) {
  return (
    <>
      <Avatar user={user} size="big" />
      <div className="user-info__text">
        <h2 className="user-info__title">
          {user.fullname} <AiOutlineEdit className="user-info__edit" />
        </h2>

        <p className="user-info__username">{user.username}</p>
      </div>
    </>
  );
}

export default Header;
