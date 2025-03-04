import { createContext, useEffect, useRef, useState } from "react";

const ScrolledPastContext = createContext();

function ScrolledPastProvder({ children }) {
  const ref = useRef(null);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [bound, setBound] = useState(false);

  useEffect(() => {
    console.log("hell");
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setScrolledPast(rect.bottom <= 0); // Kiểm tra nếu component ra khỏi màn hình trên
        setBound(rect.top <= 0);
      }
      console.log(ref);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrolledPastContext.Provider
      value={{ ref, scrolledPast, setScrolledPast, bound, setBound }}
    >
      {children}
    </ScrolledPastContext.Provider>
  );
}

export { ScrolledPastContext, ScrolledPastProvder };
