import React from 'react';

export default function CommentList({ user }) {
  return (
    <ul className="user-info__commentlist">
      {user.comments.map((comment) => (
        <li key={comment.id} className="user-info__commentitem">
          {comment.content}
          <span className="user-info__commentdate">{comment.createdAt}</span>
        </li>
      ))}
    </ul>
  );
}
