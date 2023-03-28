import React, { useEffect } from "react";
// import ContactForm from "../components/Contact/ContactForm";
import PricingLanding from "../components/Pricing/PricingLanding";
import PricingTable from "../components/Pricing/PricingTable";

function PricingPage(props) {
  useEffect(() => {
    document.title = props.metaPrice;
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <PricingLanding />
      </div>
      <PricingTable />
    </>
  );
}

export default PricingPage;
