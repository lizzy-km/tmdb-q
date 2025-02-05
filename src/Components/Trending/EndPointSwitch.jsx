import React, { useRef, useState } from 'react'

const EndPointSwitch = ({type, setType}) => {
      const ref = useRef();
      const [area, setArea] = useState({
        width: ref?.current?.clientWidth,
        height: ref?.current?.clientHeight,
      });
      const [position, setPosition] = useState({
        top: 0,
        left: 0,
      });
    const changeType = (typ, rf) => {
        setType(typ);
        setArea({
          width: rf?.target?.clientWidth,
          height: rf?.target?.clientHeight,
        });
        setPosition({
          top: rf?.target?.offsetTop,
          left:
            typ === "week"
              ? rf?.target?.offsetLeft + 2
              : rf?.target?.offsetLeft - 1,
        });
    
      };
  return (
    <div className=" flex gap-3 justify-start items-center w-full lg:w-[80%]  py-2 h-[20%] ">
    <p className=" text-2xl font-[550] ">Trending</p>
    <div className=" relative  w-auto cursor-pointer h-auto flex justify-between items-center border rounded-full border-[#032541] ">
      <div
        style={{
          top: `${position?.top}px`,
          left: `${position?.left}px`,
          width: `${area.width || 100}px`,
          height: `${area.height || 32}px`,
        }}
        className="  transition-all  rounded-full absolute bg-[#032541] "
      ></div>
      <div
        ref={ref}
        onClick={(e) => changeType("day", e)}
        className=" z-10  rounded-full   "
      >
        <p
          onClick={(e) => e.preventDefault()}
          className={` ${
            type === "day" && "gradientText"
          }   px-5 py-1 text-md tracking-wide font-semibold `}
        >
          Today
        </p>
      </div>
      <div
        onClick={(e) => changeType("week", e)}
        className=" z-10   rounded-full   "
      >
        <p
          onClick={(e) => e.preventDefault()}
          className={` ${
            type === "week" && "gradientText"
          }  px-5 py-1 text-md tracking-wide font-semibold `}
        >
          This Week
        </p>
      </div>
    </div>
  </div>
  )
}

export default EndPointSwitch