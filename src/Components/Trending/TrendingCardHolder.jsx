import { mdiDotsHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";
import TrendingDataCard from "./TrendingDataCard";


const TrendingCardHolder =  ({results}) => {

  

  
  return (
    <div className="  flex  justify-start items-start gap-3  w-auto  z-10    transition-transform h-[80%] ">
      {results?.map((trendingData) => {
        return (
         <TrendingDataCard trendingData={trendingData}  />
        );
      })}
    </div>
  );
};

export default TrendingCardHolder;
