import React from "react";
import ServiceBussiness from "../components/ServiceDetail/ServiceBussiness";
import ServiceDetailLanding from "../components/ServiceDetail/ServiceDetailLanding";
import ServiceExplain from "../components/ServiceDetail/ServiceExplain";
import ServiceBrand from "../components/ServiceDetail/ServiceBrand";
import ServiceEnd from "../components/ServiceDetail/ServiceEnd";
function ServiceDetailPage() {
  return (
    <>
      <div className="content-wrapper-service-det">
        <ServiceDetailLanding />
      </div>

      <ServiceExplain />
      <div className="content-wrapper-service">
        <ServiceBussiness />
      </div>
      <ServiceBrand />
      <ServiceEnd />
    </>
  );
}

export default ServiceDetailPage;
