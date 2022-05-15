import React from 'react';
import { MdOutlineAddComment } from 'react-icons/md';
import { post } from '../../services/sampledata';

export function PostCard() {
  return (
    <article className="post-card">
      <header className="postcard__header">
        <img
          className="postcard__avatar"
          src={post.userID.avatarURL}
          alt={post.userID.username}
        />
        <p className="postcard__fullname">{post.userID.fullname}</p>
      </header>
      <div className="postcard__imagecontainer">
        <img className="postcard__image" src={post.imageURL} alt={post.text} />
        <div className="post-card__tool-bar">
          <MdOutlineAddComment />
        </div>
      </div>
      <div className="postcard__text">
        <span className="postcard__usertext">{post.userID.username}</span>
        <p className="postcard__text">{post.text}</p>
      </div>
      <ul className="postcard__commentslist">
        {post.comments.map((comment) => (
          <li className="postcard__comment" key={comment.id}>
            {comment.userIDcomment.username} | {comment.content}
          </li>
        ))}
      </ul>
    </article>
  );
}
