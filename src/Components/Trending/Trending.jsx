import React, { useEffect, useRef, useState } from "react";
import TrendingCardHolder from "./TrendingCardHolder";
import EndPointSwitch from "./EndPointSwitch";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/services/animateSlice";
import { useInfiniteQuery } from "@tanstack/react-query";
const fetchAnimeTitles = async (page, type) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/${type}?api_key=a5abf7e1c956c65d2f3a65f71da4345c&page=${page}`
  );
  const data = await response.json();
  return { ...data };
};
const Trending = () => {
  const [type, setType] = useState("day");
  const ref = useRef()

  const { data, fetchNextPage, isSuccess, isLoading, isFetching } =
    useInfiniteQuery(
      ["trending", type],
      ({ pageParam = 1 }) => fetchAnimeTitles(pageParam, type),
      {
        getNextPageParam: ({ page = 1 }) => {
          console.log(page);

          return page + 1;
        },
      }
    );

  const nextPage = () => {
    fetchNextPage();
  };

  ref.current?.addEventListener("scroll", (e)=> {
    const target = e.target;
    const rightOffset = target.offsetLeft + target.offsetWidth;

    console.log(rightOffset);
    
    
    
  });

  useEffect(() => {
    fetchAnimeTitles(1, type);
  }, [type]);

  return (
    <section className=" relative flex flex-col w-full  bg-[#d4d4d4] max-h-[415px]  h-[415px] justify-start items-center  text-[#232425]">
      <img
        className=" absolute w-full lg:w-[85%] h-full bottom-[-30%]  "
        src="https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg"
        alt=""
        srcset=""
      />

      <EndPointSwitch setType={setType} type={type} />

      <div  ref={ref} className=" flex justify-start items-center max-w-full w-full gap-3 lg:max-w-[80%] lg:w-[80%] overflow-auto h-full ">
        {data?.pages?.map(({ results }, index) => {
          return (
            <TrendingCardHolder 
              isSuccess={isSuccess}
              isLoading={isLoading}
              isFetching={isFetching}
              key={index}
              type={type}
              results={results}
            />
          );
        })}
       
      </div>
    </section>
  );
};

export default Trending;
