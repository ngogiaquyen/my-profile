import { useEffect, useState } from "react";

export const useScrolledToTop = () => {
    const [atTop, setAtTop] = useState(window.scrollY === 0);
  
    useEffect(() => {
      const handleScroll = () => {
        setAtTop(window.scrollY === 0);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return atTop;
  };
  