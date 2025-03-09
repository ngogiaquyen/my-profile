import { createContext, useState, useEffect, useContext } from "react";
import { ScrolledPastContext } from "./ScrolledPastProvder";

const ScrollEventContext = createContext();

function ScrollEventProvider({ children }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  
  const {  bottomCompRef } = useContext(ScrolledPastContext);


  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      let  rectbottom = {top: 0};
      if (bottomCompRef.current) {
        rectbottom = bottomCompRef.current.getBoundingClientRect();
      }
      const currentScrollY = window.scrollY;
      const scrollThreshold = 600; 
      if (currentScrollY > lastScrollY && rectbottom.top < -200) {
        setScrollDirection("down");
        lastScrollY = currentScrollY;
      } else if ( currentScrollY < lastScrollY - scrollThreshold) {
        setScrollDirection("up");
        lastScrollY = currentScrollY;
      }else if(currentScrollY > lastScrollY){
        setScrollDirection(null);
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
