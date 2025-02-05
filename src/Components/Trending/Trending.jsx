import React, { useEffect, useRef, useState } from "react";
import TrendingCardHolder from "./TrendingCardHolder";
import EndPointSwitch from "./EndPointSwitch";
import {
  fetchData,
  GetInfiniteData,
  IsLastElementOnView,
} from "../../Hooks/CusHooks";

const Trending = () => {
  const [type, setType] = useState("day");
  const ref = useRef(null);
  const scrollRef = useRef(null);
  const endPointUrl = `trending/all/${type}`;

  const { data, nextPage } = GetInfiniteData(endPointUrl, type);

  const { isVisible } = IsLastElementOnView(ref);

  const trendOnScroll = () => {
    isVisible && nextPage();
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({
      left: 0, // Scroll to the maximum right
      behavior: "smooth", // Smooth scrolling
    });

    fetchData(1, endPointUrl);
  }, [type]);

  return (
    <section className=" relative flex flex-col w-full  bg-[#d4d4d4] max-h-[415px]  h-[415px] justify-start items-center  text-[#232425]">
      <img
        className=" absolute w-full lg:w-[85%] h-full bottom-[-25%]   "
        src="https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg"
        alt=""
        srcset=""
      />

      <EndPointSwitch setType={setType} type={type} />

      <div
        ref={scrollRef}
        onScroll={trendOnScroll}
        className=" flex  justify-start items-center max-w-full w-full gap-3 lg:max-w-[80%] lg:w-[80%] overflow-auto h-full "
      >
        {data?.pages?.map(({ results }, index) => {
          return <TrendingCardHolder key={index} results={results} />;
        })}

        <div
          ref={ref}
          className="  -ml-[450px] flex justify-center items-center w-[150px] h-[40%] p-2 rounded-md  "
        ></div>
      </div>
    </section>
  );
};

export default Trending;
