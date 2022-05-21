import React from 'react';
import { PosThumbnail } from '../Posts/PostThumbnail';

export default function PostList({ user }) {
  return (
    <ul className="user-info__list">
      {user.posts.map((post) => (
        <li key={post.id}>
          <PosThumbnail post={post} />
        </li>
      ))}
    </ul>
  );
}
