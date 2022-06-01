import React, { useRef } from 'react';
import { useObserver } from '../../hooks/useObserver';

export function ImagePost({ post }) {
  return (
    <img className="postcard__image" src={post.imageURL} alt={post.text} />
  );
}

export default function LazyImagePost({ post }) {
  const elementRef = useRef();

  const show = useObserver({ elementRef, distance: '200px' });

  return (
    <div ref={elementRef}>
      {show ? <ImagePost post={post} /> : <h3>Cargando....</h3>}
    </div>
  );
}
