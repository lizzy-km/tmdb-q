import React from "react";
import { useGetTrendingQuery } from "../../redux/api/AuthApi";

const Trending = () => {
  const { data } = useGetTrendingQuery("day");

  const trendingData = data?.results;

  console.log(trendingData);

  return (
    <section className=" relative flex flex-col w-full  bg-[#d4d4d4] max-h-[415px] overflow-auto h-[415px] justify-start items-center  text-[#232425]">
      <img
        className=" absolute w-full lg:w-[85%] h-full bottom-[-30%]  "
        src="https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg"
        alt=""
        srcset=""
      />

      <div className=" flex flex-col gap-3 justify-center items-start w-full lg:w-[80%] h-[20%] ">
        <p className=" text-2xl font-[500] ">Trending</p>
      </div>

      <div className="  flex  justify-start items-start max-w-full lg:max-w-[80%] overflow-auto gap-3 w-full lg:w-[80%] bg-[#d4d4d4] bg-no-repeat bg-bottom  transition-transform h-[70%] ">
        {trendingData?.map((trendingData) => {
          return (
            <div
              key={trendingData.id}
              className=" min-w-[150px] h-[80%] rounded-md backdrop-blur bg-[#23242537] "
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
