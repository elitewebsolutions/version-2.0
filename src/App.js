import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
import PricingPage from "./page/PricingPage";
import ServiceDetailPage from "./page/ServiceDetailPage";
import ServicePage from "./page/ServicePage";
import { ToastContainer } from "react-toastify";
import PortfolioPage from "./page/PortfolioPage";

function App() {
  const metaAbout = "About | Elite";
  const metaHome = "Home | Elite";
  const metaService = "Service | Elite";
  const metaContact = "Contact | Elite";
  const metaPrice = "Price | Elite";
  const metaPortfolio = "Portfolio | Elite";

  const [toggle, setToggle] = useState(false);
  const location1 = useLocation();

  const handleClick = useCallback(
    (state = "") => {
      if (state === "refresh") {
        setToggle(false);
      } else {
        setToggle(!toggle);
      }
    },
    [toggle]
  );

  const ScrollTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, [location.pathname]);
    return null;
  };

  useEffect(() => {
    handleClick("refresh");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location1.pathname]);

  return (
    <>
      <ScrollTop />
      <Header toggle={toggle} handleClick={() => handleClick()} />
      <Routes>
        <Route path="/" element={<HomePage metaHome={metaHome} />} />
        <Route
          path="/about-us/"
          element={<AboutPage metaAbout={metaAbout} />}
        />
        <Route
          path="/contact/"
          element={<ContactPage metaContact={metaContact} />}
        />
        <Route
          path="/portfolio/"
          element={<PortfolioPage metaPortfolio={metaPortfolio} />}
        />
        <Route
          path="/pricing/"
          element={<PricingPage metaPrice={metaPrice} />}
        />
        <Route
          path="/services/"
          element={<ServicePage metaService={metaService} />}
        />
        <Route
          path="/services/:title"
          element={<ServiceDetailPage metaService={metaService} />}
        />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
