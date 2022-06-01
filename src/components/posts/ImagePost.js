import React, { useState, useEffect, useRef } from 'react';

export function ImagePost({ post }) {
  return (
    <img className="postcard__image" src={post.imageURL} alt={post.text} />
  );
}

export default function LazyImagePost({ post }) {
  // eslint-disable-next-line no-unused-vars
  const [show, setshow] = useState();

  const elementRef = useRef();

  useEffect(() => {
    const whenChange = (entries, observer) => {
      const element = entries[0];
      console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setshow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(whenChange, {
      rootMargin: '200px'
    });

    observer.observe(elementRef.current);
  });

  return (
    <div ref={elementRef}>
      {show ? <ImagePost post={post} /> : <h3>Cargando....</h3>}
    </div>
  );
}
