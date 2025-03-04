import { createContext, useEffect, useRef, useState } from 'react';

const ScrolledPastContext = createContext();

function ScrolledPastProvder({ children }) {
  const refNav = useRef(null);
  const bottomCompRef = useRef(null);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [isPin, setIsPin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (refNav.current) {
        const rectNav = refNav.current?.getBoundingClientRect();

        const rectBottom = bottomCompRef.current?.getBoundingClientRect();

        // setScrolledPast(rectNav.top <= 0 && rectBottom.top <= 0); // Kiểm tra nếu component ra khỏi màn hình trên
        setIsPin(rectNav.top <= 0);
        setScrolledPast(rectNav.top <= 0); // Kiểm tra nếu component ra khỏi màn hình trên

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrolledPastContext.Provider value={{ refNav, isPin,bottomCompRef, scrolledPast, setScrolledPast, setIsPin }}>
      {children}
    </ScrolledPastContext.Provider>
  );
}

export { ScrolledPastContext, ScrolledPastProvder };
