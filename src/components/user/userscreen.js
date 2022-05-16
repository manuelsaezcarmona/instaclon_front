import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import { user } from '../../services/sampledata';
import { PosThumbnail } from '../posts/postumbnail';

export function UserScreen() {
  return (
    <div className="user-container">
      <div className="user-info">
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
        <div className="user-info__text">
          <h2 className="user-info__title">{user.fullname}</h2>
          <AiOutlineEdit />
          <p className="user-info__username">{user.username}</p>
        </div>
        <ul className="user-info__list">
          {user.posts.map((post) => (
            <PosThumbnail key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
