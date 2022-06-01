import React, { useRef } from 'react';
import { useObserver } from '../../hooks/useObserver';

export function ImagePost({ post }) {
  return (
    <img className="postcard__image" src={post.imageURL} alt={post.text} />
  );
}

export default function LazyImagePost({ post }) {
  const elementRef = useRef();

  const show = useObserver({ elementRef });

  /*  useEffect(() => {
    const whenChange = (entries, observer) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setshow(true);
        observer.disconnect();
      }
      return () => observer.disconnect();
    };

    const observer = new IntersectionObserver(whenChange, {
      rootMargin: '200px'
    });

    observer.observe(elementRef.current);
  }); */

  return (
    <div ref={elementRef}>
      {show ? <ImagePost post={post} /> : <h3>Cargando....</h3>}
    </div>
  );
}
