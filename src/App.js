import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GenericPageLayout from "./components/GenericPageLayout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import OtherServices from "./pages/OtherServices";
import Products from "./pages/Products";
import Services from "./pages/Services";
import WhatWeDo from "./pages/WhatWeDo";
import WhereWeOperate from "./pages/WhereWeOperate";
import ConstructionServices from "./pages/services/ConstructionServices";
import SandblastingServices from "./pages/services/Sandblasting";
import PumpingService from "./pages/services/PumpingService";
import TruflowPumpsComponent from "./pages/products/PumpsTruflow";
import BartailPumpsComponent from "./pages/products/PumpsBartail";
import TKKGearsComponent from "./pages/products/TKKHoistCrane";
import MudexAdditivesComponent from "./pages/products/Additives";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route
        path="/services/pumping"
        element={<PumpingService/>}
      />
      <Route
        path="/services/machinery"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
      />
      
      <Route
        path="/services/corrosion"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
      />
      <Route
        path="/services/electric"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
      />
      <Route path="/services/sandblasting" element={<SandblastingServices />} />
      <Route path="/services/construction" element={<ConstructionServices />}/>
      <Route path="/products/pumps/truflo" element={<TruflowPumpsComponent />}/>
      <Route path="/products/pumps/bartail" element={<BartailPumpsComponent />}/>
      <Route path="/products/additives" element={<MudexAdditivesComponent  />}/>
      <Route path="/products/gears" element={<TKKGearsComponent />}/>
      
      <Route path="/products" element={<Products />} />
      <Route
        path="/other-services"
        element={
          <GenericPageLayout
            component={<OtherServices />}
            title="Other Services"
            route="other-services"
          />
        }
      />
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
      <Route
        path="/services"
        element={
          <GenericPageLayout
            component={<Services />}
            title="Services"
            route="services"
          />
        }
      />
    </Routes>
  );
}

export default App;
