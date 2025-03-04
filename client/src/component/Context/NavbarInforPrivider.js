import { createContext, useRef, useState } from 'react';

const NavbarInforContext = createContext();

function NavbarInforPrivider({ children }) {
  const [navIndexActive, setNavIndexActive] = useState(0);
  const navConfig = useRef();
  return (
    <NavbarInforContext.Provider value={{ navConfig, navIndexActive, setNavIndexActive }}>{children}</NavbarInforContext.Provider>
  );
}

export { NavbarInforContext, NavbarInforPrivider };
