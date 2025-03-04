import { useEffect, useState } from "react";

export const useScrolledUpOneScreen = () => {
    const [scrolledUp, setScrolledUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (lastScrollY - currentScrollY >= window.innerHeight) {
          setScrolledUp(true);
        } else {
          setScrolledUp(false);
        }
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
  
    return scrolledUp;
  };