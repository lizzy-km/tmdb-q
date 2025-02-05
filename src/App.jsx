import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Common/Footer/Footer";
import Header from "./Common/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import SetElement from "./Hooks/SetElement";

function App() {
  const ref = useRef();

  // const { mainEl, scrollUp } = SetElement(ref, ref.current?.id);

  // let mainScrollTop = [];

  // const HandleHeader = (e) => {
  //   mainScrollTop?.length > 15
  //     ? mainScrollTop.shift()
  //     : (mainScrollTop = [...mainScrollTop, mainEl?.scrollTop]);

  //     console.log(mainScrollTop[0] + '___'+ mainScrollTop[mainScrollTop?.length - 1])
      

  //   if (mainScrollTop[0] < mainScrollTop[mainScrollTop?.length - 1]) {
  //     SetElement(false, "scroll");
  //     console.log("Scroll--- > ", scrollUp);
  //   } else {
  //     console.log("Scroll+++ > ", scrollUp);

  //     SetElement(true, "scroll");
  //   }
  // };

  return (
    <div
      // onScroll={HandleHeader}
      id="main"
      ref={ref}
      className="  relative flex flex-col h-screen max-h-screen overflow-auto w-full justify-start items-center "
    >
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
