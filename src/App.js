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
import Painting from "./pages/services/Painting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route
        path="/services/pumping"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
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
        path="/services/tanks"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
      />
      <Route path="/services/sandblasting" element={<Painting />} />
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
        path="/services/plumbing"
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
      <Route
        path="/services/construction"
        element={
          <GenericPageLayout
            component={<WhatWeDo />}
            title="What we do"
            route="what-we-do"
          />
        }
      />
      <Route
        path="/products/pumps/truflo" element={<Products />}/>
      <Route
        path="/products/pumps/bartail"
        element={
          <GenericPageLayout
            component={<Products />}
          />
        }
      />
      <Route
        path="/products/additives"
        element={
          <GenericPageLayout
            component={<Products />}
          />
        }
      />
      <Route
        path="/products/gears"
        element={
          <GenericPageLayout
            component={<Products />}
          />
        }
      />
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
      <Route
        path="/contact-us"
        element={
          <GenericPageLayout
            component={<ContactUs />}
            title="Contact Us"
            route="contact-us"
          />
        }
      />
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
