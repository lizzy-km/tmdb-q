import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import Search from "./Search";
import { useSelector } from "react-redux";
import SetElement from "../../Hooks/SetElement";

const Header = () => {
  const ref = useRef();

  const {  scrollUp } = SetElement(ref, ref.current?.id)


 


  return (
    <div
    style={{
      top: scrollUp === true ? '0px' : "-64px",
      zIndex: "1000",
    }}
      ref={ref}
      id="header"
      className=" z-50 top-0 transition-all fixed flex flex-col w-[100%] text-[#f4f4f4] font-bold h-auto bg-[#032541] justify-center items-center  "
    >
      <Nav />
      <Search />
    </div>
  );
};

export default Header;
