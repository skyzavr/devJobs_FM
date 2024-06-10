import { useState, useEffect } from 'react';

export const useWidth = () => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);

  const resize = () => setWidthSize(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);
  return widthSize;
};
