import React, { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import "./portfolio.css"
import useContentful from "../../useContentful";


function PortfolioLanding() {

const[content,setContent]=useState([])
  const {  getPortfolioLandingPage } = useContentful();

  useEffect(() => {
    getPortfolioLandingPage().then((res) => {
      setContent(res?.items?.map((port) => port));
    });
    // eslint-disable-next-line
  }, []);


  return (
    <section className="homePageDetailPage serviceDetailLanding portfolioListingPage" id={12}>
      <div className="wrapper">
        <Container fluid className="p-0">
         {
          content?.map((con,index)=>{
            return (
              <Row style={{ padding: "4em 0" }} key={index} className="flex-row-reverse">
              <Col md={8}>
                <div className="homeContent">
                  <div>
                  <h1>{con?.fields?.title}</h1>
                  </div>
                </div>

              </Col>

              <Col md={4}>
                <div className="serviceDetImageBox">
                  <img src={con?.fields?.image?.fields?.file?.url} className="img-size" alt="box" />
                </div>
              </Col>
            </Row>
            )
          })
         }
        </Container>
      </div>
    </section>
  );
}

export default PortfolioLanding;
