import { mdilArrowRight } from "@mdi/light-js";
import Icon from "@mdi/react";
import React, { useEffect } from "react";

const HeroSection = () => {
    const fetchTrending = async()=>{
        const api = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a5abf7e1c956c65d2f3a65f71da4345c`)
        const {results} = await api.json()
        console.log(results);
       
    }
    useEffect(()=> {
        // fetchTrending()
    },[])
  return (
    <section className=" flex justify-center items-center w-full bg-[#d4d4d4] h-[450px] ">
      <div
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/k9CjFHZnPk1QCqGrQeKlHX5hcuG.jpg)`,
        }}
        className=" relative w-full lg:w-[85%] lg:bg-left bg-center transition-transform bg-cover  lg:bg-cover h-full bg-[#232425] "
      >
        <div className=" absolute flex flex-col px-10 gap-3 justify-center items-start pb-4 top-0 left-0 w-full h-full bg-[#23242557] backdrop-brightness-50 ">
          <div className=" gradientText HeroHeader flex flex-col h-auto w-auto justify-center items-start ">
            <h1>
              That's a <br />
              Wrap 2024{" "}
            </h1>
          </div>
          <div className=" flex flex-col gap-4 justify-start text-lg text-[#f4f4f4] font-medium items-start ">
            <p>The best (and worst) of the year from TMDB.</p>
            <div className=" border-[#f4f4f4] cursor-pointer flex justify-center items-center text-base  rounded-full h-[35px] w-auto border-[2px] px-3 py-1 ">
              <p>Check it out</p>
              <Icon path={mdilArrowRight} size={1} color="#f4f4f4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
