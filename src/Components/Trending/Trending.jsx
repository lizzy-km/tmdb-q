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
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Triggers when 50% of the element is in view
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const trendOnScroll = () => {
    isVisible && nextPage()
  }

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

      <div  onScroll={trendOnScroll}  className=" flex  justify-start items-center max-w-full w-full gap-3 lg:max-w-[80%] lg:w-[80%] overflow-auto h-full ">
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

        <div  ref={ref} className="  -ml-[450px] flex justify-center items-center w-[150px] h-[40%] p-2 rounded-md  ">
        </div>
       
      </div>
    </section>
  );
};

export default Trending;
