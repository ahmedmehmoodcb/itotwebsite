import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../App.css";

import NaveBar from "../component/NaveBar";
import CarosalSlider from "../component/dashboard/Slider";
import Dashboard from "../Layout/Dashboard";
import WhyItotComponet from "../component/whyItot/whyItotComponet";
import Footer from "../component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaveBar />
        {/* <Routes> */}
        <WhyItotComponet />

        {/* <CarosalSlider />
        <Dashboard /> */}
        {/* <Routes/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
