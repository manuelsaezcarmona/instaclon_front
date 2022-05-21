import React from 'react';

export function PosThumbnail({ post }) {
  return (
    <img className="user-info__image" src={post.imageURL} alt={post.text} />
  );
}
