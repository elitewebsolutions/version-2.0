import React, { useEffect } from "react";
import LandingService from "../components/Service/LandingService";
import ServiceIndex from "../components/Service/ServiceIndex";

function ServicePage(props) {
  useEffect(() => {
    document.title = props.metaService;
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <LandingService />
      </div>

      {[...new Array(6)].map((i, index) => {
        return (
          <div>
            <div
              className={`${
                index % 2 === 0 ? "" : "content-wrapper-serviceIndex"
              }`}
            >
              <ServiceIndex key={index} index={index} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ServicePage;
