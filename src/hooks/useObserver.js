import { useState, useEffect } from 'react';

export const useObserver = ({ elementRef }) => {
  const [show, setshow] = useState();

  useEffect(() => {
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
  });

  return show;
};
