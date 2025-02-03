import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Common/Footer/Footer";
import Header from "./Common/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {



  return (
    <div className="  relative flex flex-col h-screen max-h-screen overflow-auto w-full justify-start items-center ">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path={"/"} element={<Home  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
