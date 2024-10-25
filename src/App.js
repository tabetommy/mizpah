import React from "react";
import { Routes, Route } from "react-router-dom";
import GenericPageLayout from "./components/GenericPageLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeOperate from "./pages/WhereWeOperate";
import ConstructionServices from "./pages/services/ConstructionServices";
import SandblastingServices from "./pages/services/Sandblasting";
import PumpingService from "./pages/services/PumpingService";
import TruflowPumpsComponent from "./pages/products/PumpsTruflow";
import TKKGearsComponent from "./pages/products/TKKHoistCrane";
import MudexAdditivesComponent from "./pages/products/Additives";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services/pumping" element={<PumpingService/>}/>
      <Route path="/services/sandblasting" element={<SandblastingServices />} />
      <Route path="/services/construction" element={<ConstructionServices />}/>
      <Route path="/products/pumps/truflo" element={<TruflowPumpsComponent />}/>
      <Route path="/products/additives" element={<MudexAdditivesComponent  />}/>
      <Route path="/products/gears" element={<TKKGearsComponent />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route
        path="/where-we-operate"
        element={
          <GenericPageLayout
            component={<WhereWeOperate />}
            title="Where we operate"
            route="where-we-operate"
          />
        }
      />
    </Routes>
  );
}

export default App;
