"use client";
import { useState } from "react";
import NavBtn from "./NavBtn";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import SlideIn from "./SlideIn";

const Header = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => setState(open);
  return (
    <>
      <div className={`container mx-auto sticky top-0 z-50 h-auto py-4 ${state ? 'bg-transparent' : 'delay-1000 bg-[rgba(0,0,0,0.5)]'} rounded`}>
        <SlideIn side={"top"}>
          <div className="flex items-center justify-between">
            <NavLogo />
            <NavBtn toggleDrawer={toggleDrawer} state={state} />
          </div>
        </SlideIn>
      </div>
      <NavMenu toggleDrawer={toggleDrawer} isOpen={state} />
    </>
  );
};

export default Header;
