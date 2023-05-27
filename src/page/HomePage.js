import React, { useState, useEffect } from "react";
import useContentful from "../useContentful";
import About from "../components/Home/About";
import Home from "../components/Home/Home";
import OurPartners from "../components/Home/OurPartners";
import OurRecentWork from "../components/Home/OurRecentWork";
import Project from "../components/Home/Project";
import ProjectRating from "../components/Home/ProjectRating";
import Services from "../components/Home/Services";
import Testnomial from "../components/Home/Testnomial";

function HomePage(props) {
  const [home, setHome] = useState([]);
  const [rating, setRating] = useState([]);
  const { getHome, getRating } = useContentful();

  useEffect(() => {
    document.title = props.metaHome;
    getHome().then((res) => {
      setHome(res);
    });
    getRating().then((res) => {
      setRating(res);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <Home home={home} />
      </div>
      <About home={home} />
      <div className="content-wrapper-service">
        <Services home={home} />
      </div>
      <Project home={home} />

      <Testnomial/>

      <ProjectRating rating={rating?.items} />

      <OurRecentWork home={home} />

      <OurPartners home={home} />


    </>
  );
}

export default HomePage;
