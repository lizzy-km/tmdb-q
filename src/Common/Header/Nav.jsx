import React, { useEffect, useRef } from "react";
import SetElement from "../../Hooks/SetElement";

const Nav = () => {
  const ref = useRef();



 useEffect(() => {
    SetElement(ref, ref.current?.id);
  }, []);
  return (
    <div
      ref={ref}
      id="nav"
      className=" flex justify-start items-center  gap-3 h-[64px] w-[80%]  bg-[#032541]  "
    >
      <div className=" w-auto h-auto ">
        <img
          className=" w-[154px] h-full  "
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
      </div>
      <div className=" flex gap-3 justify-start items-center w-full h-full ">
        <div className=" p-2 flex justify-center items-center  ">
          <p>Movie</p>
        </div>
        <div className=" p-2 flex justify-center items-center  ">
          <p>TV Shows</p>
        </div>
        <div className=" p-2 flex justify-center items-center ">
          <p>People</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
