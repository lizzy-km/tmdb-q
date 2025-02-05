import { mdiDotsHorizontal } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";

const TrendingDataCard = ({ trendingData }) => {
  const [isFetching, setIsFetching] = useState(false);

  const imgUrl = `https://media.themoviedb.org/t/p/w220_and_h330_face/${trendingData.poster_path}`;

  useEffect( () => {
    new Promise((resolve, reject) => {
      setIsFetching(true);

      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        img.width > 0 ? setIsFetching(false) : setIsFetching(true);
        resolve();
      };
      img.onerror = () => {
        setIsFetching(true);
        reject();
      };
    });
  }, [imgUrl]);
  return (
    <div
      key={trendingData.id}
      className=" relative min-w-[150px] w-[150px] h-[80%] rounded-md backdrop-blur bg-[#23242537] "
    >
      <div className=" flex absolute top-2 right-2 z-10 justify-center items-center w-6 h-6 rounded-full backdrop-blur-md cursor-pointer bg-[#d4d4d463] ">
        <Icon path={mdiDotsHorizontal} size={1} />
      </div>
      {!isFetching && (
        <div className=" max-w-full max-h-full overflow-hidden  w-full h-full justify-center items-center flex rounded-md bg-[#2324252a] backdrop-brightness-[120%] cursor-pointer "></div>
      )}

      {!isFetching ? (
        <img
          className=" absolute top-0 right-0 -z-10 rounded-md cursor-pointer h-full w-full object-cover "
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${trendingData.poster_path}`}
          alt=""
        />
      ) : (
        <div className=" max-w-full max-h-full overflow-hidden  w-full h-full justify-center items-center flex rounded-md bg-[#2324252a] backdrop-brightness-[120%] cursor-pointer ">
          <span className="skeleton-box w-[150%] h-[150%] rounded-md "></span>
        </div>
      )}
    </div>
  );
};

export default TrendingDataCard;
