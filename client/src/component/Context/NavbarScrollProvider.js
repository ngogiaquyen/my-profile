import { createContext, useRef } from "react";

const NavbarScrollContext = createContext();

function NavbarScrollProvider({ children }) {
  const refNav = useRef();
  const scrollToTop = () => {
    refNav.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <NavbarScrollContext.Provider value={{ refNav, scrollToTop }}>
      {children}
    </NavbarScrollContext.Provider>
  );
}

export {NavbarScrollContext, NavbarScrollProvider};
