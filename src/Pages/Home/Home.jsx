import React from "react";
import HeroSection from "./Component/HeroSection";
import Trending from "../../Components/Trending/Trending";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "110px",
      }}
      className=" flex flex-col  justify-start items-center w-full h-auto bg-[#d4d4d4] text-[#232425] "
    >
      <HeroSection />
      <Trending/>

      <section className=" w-full h-[100px] " >
        
      </section>
    </div>
  );
};

export default Home;
