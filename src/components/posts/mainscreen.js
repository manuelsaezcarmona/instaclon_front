import React from 'react';
import { PostCard } from './postcard';

export function MainScreen() {
  return (
    <div className="main-posts-container">
      <h1>las tarjetas de post</h1>
      <p>las postCards se meten en una ul y cada una dentro de un li</p>
      <PostCard />
    </div>
  );
}
