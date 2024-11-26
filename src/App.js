import React,{lazy} from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import ConstructionServices from "./pages/services/ConstructionServices";
import SandblastingServices from "./pages/services/Sandblasting";
import PumpingService from "./pages/services/PumpingService";
import TruflowPumpsComponent from "./pages/products/PumpsTruflow";
import TKKGearsComponent from "./pages/products/TKKHoistCrane";
import MudexAdditivesComponent from "./pages/products/Additives";
import CrusherComponent from "./pages/products/Crusher";

// const Home=lazy(()=>import('./pages/Home'));
// const AboutUs=lazy(()=>import('./pages/AboutUs'));
// const ContactUs=lazy(()=>import('./pages/ContactUs'));
// const PumpingService=lazy(()=>import('./pages/services/PumpingService'));
// const SandblastingServices=lazy(()=>import('./pages/services/Sandblasting'));
// const ConstructionServices=lazy(()=>import('./pages/services/ConstructionServices'));
// const TruflowPumpsComponent=lazy(()=>import('./pages/products/PumpsTruflow'));
// const MudexAdditivesComponent =lazy(()=>import('./pages/products/Additives'));
// const TKKGearsComponent  =lazy(()=>import('./pages/products/TKKHoistCrane'));
// const CrusherComponent =lazy(()=>import('./pages/products/Crusher'));


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services/pumping" element={<PumpingService/>}/>
      <Route path="/services/sandblasting" element={<SandblastingServices />} />
      <Route path="/services/construction" element={<ConstructionServices />}/>
      <Route path="/products/truflo" element={<TruflowPumpsComponent />}/>
      <Route path="/products/additives" element={<MudexAdditivesComponent  />}/>
      <Route path="/products/gears" element={<TKKGearsComponent />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path= "/products/crusher" element={<CrusherComponent />}/>
    </Routes>
  );
}

export default App;
