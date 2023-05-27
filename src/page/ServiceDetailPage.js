import React, { useEffect, useState } from "react";
import ServiceBussiness from "../components/ServiceDetail/ServiceBussiness";
import ServiceDetailLanding from "../components/ServiceDetail/ServiceDetailLanding";
import ServiceExplain from "../components/ServiceDetail/ServiceExplain";
import ServiceBrand from "../components/ServiceDetail/ServiceBrand";
import ServiceEnd from "../components/ServiceDetail/ServiceEnd";

import useContentful from ".././useContentful";
import { useLocation, useParams } from "react-router-dom";
function ServiceDetailPage() {
  const { title } = useParams();
  const location = useLocation();

  const { getServiceDetail, getHome, getServiceBrand } = useContentful();
  const [home, setHome] = useState([]);
  const [brand, setBrand] = useState([]);

  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    // document.title = title||;
    getServiceDetail().then((item) => {
      item?.items?.filter((i) => {
        console.log(i);
        return title === i.fields.slug.split(/[/]+/g).join("-").toLowerCase()
          ? setServiceDetail(i)
          : [];
      });
      // console.log(data);
    });

    getHome().then((res) => {
      setHome(res);
    });
    getServiceBrand().then((res) => {
      setBrand(res);
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  // console.log(serviceDetail);

  return (
    <>
      <div className="content-wrapper-service-det">
        <ServiceDetailLanding
          heading={serviceDetail?.fields?.heading}
          image={serviceDetail?.fields?.bannerImage?.fields?.file.url}
          slug={serviceDetail?.fields?.slug}
        />
      </div>

      <ServiceExplain
        description={serviceDetail?.fields?.description}
        image={serviceDetail?.fields?.image?.fields?.file.url}
      />
      <div className="content-wrapper-service serviceDetailContent">
        <ServiceBussiness
          home={home}
          title={serviceDetail?.fields?.ourService}
          detail={serviceDetail}
        />
      </div>
      <ServiceBrand brand={brand} />
      <ServiceEnd content={serviceDetail} />
    </>
  );
}

export default ServiceDetailPage;
