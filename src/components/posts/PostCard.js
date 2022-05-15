import React from 'react';

import { MdOutlineAddComment } from 'react-icons/md';
import { post } from '../../services/sampledata';

export function PostCard() {
  return (
    <article className="post-card">
      <header className="postcard__header">
        <img
          className="avatar"
          src={post.userID.avatarURL}
          alt={post.user.username}
        />
        <p>{post.userID.fullname}</p>
      </header>
      <div className="post-card__tool-bar">
        <MdOutlineAddComment />
      </div>
    </article>
  );
}
