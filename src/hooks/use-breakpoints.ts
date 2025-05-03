import { useEffect, useState } from 'react';

export default function useBreakpoints() {
  const [width, setWidth] = useState(0);
  const [isLarge, setIsLarge] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 1280);
      setIsMedium(window.innerWidth >= 768);
      setWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isLarge,
    isMedium,
    width,
  };
}
