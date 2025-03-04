import { createContext, useState, useEffect } from "react";

const ScrollEventContext = createContext();

function ScrollEventProvider({ children }) {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 600; 

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        lastScrollY = currentScrollY;
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setScrollDirection("up");
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollEventContext.Provider
      value={{ scrollDirection, setScrollDirection }}
    >
      {children}
    </ScrollEventContext.Provider>
  );
}

export { ScrollEventContext, ScrollEventProvider };
