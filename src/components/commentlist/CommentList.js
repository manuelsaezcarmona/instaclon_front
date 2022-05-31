import React from 'react';
import { formatDate } from '../../helpers/date';

export default function CommentList({ user }) {
  return (
    <ul className="user-info__commentlist">
      {user.comments.map((comment) => {
        const date = formatDate(comment.createdAt);

        return (
          <li key={comment.id} className="user-info__commentitem">
            {comment.content}
            <span className="user-info__commentdate">{date}</span>
          </li>
        );
      })}
    </ul>
  );
}
