import React from 'react';
import { PostCard } from './postcard';
import { posts } from '../../services/sampledata';

export function MainScreen() {
  return (
    <div className="main-posts-container">
      <ul className="posts__list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
