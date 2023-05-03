import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pricing.css";
import { BsCheckCircleFill } from "react-icons/bs";
import useContentful from "../../useContentful";
import pricing_icon from "../../assets/service/logo.png";

function PricingTable() {
  const { getPricing } = useContentful();
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    getPricing().then(setPricing);
    // eslint-disable-next-line
  }, []);

  const { priceData, priceGuarant, priceText } = pricing?.items
    ? pricing?.items[0]?.fields?.pricingTable
    : [];

  return (
    <div>
      <section className="pricingTable">
        <div className="wrapper">
          <Container fluid className="p-0">
            <Row>
              <Col lg={3} className="mb-4">
                <div className="pricingBox1">
                  <div className="pricingGarentyBox">
                    {priceGuarant?.map((item, index) => {
                      return <span key={index}>{item.guarantee}</span>;
                    })}
                  </div>

                  <div
                    className="my-4 d-flex flex-column "
                    style={{ paddingTop: "16px" }}
                  >
                    {priceText?.map((item, index) => {
                      return <p key={index}>{item.s}</p>;
                    })}
                  </div>
                </div>
              </Col>
              {priceData?.map((item, index) => {
                return (
                  <Col lg={3} className="mb-4" key={index}>
                    <div className="pricingBox">
                      <div className="pricingGarentyBox">
                        <div class="pricing-icon">
                          <img
                            src={pricing_icon}
                            className="img-size"
                            alt="box"
                          />
                        </div>
                        <h3>{item.title}</h3>
                        <p className="subText">{item.description}</p>
                        <h4>${item.price}</h4>
                      </div>
                      <div className="pricingchoice my-4">
                        {item.dataShow?.map((d, index) => {
                          return d.icon ? (
                            <p className="" key={index}>
                              <BsCheckCircleFill color={"green"} size={23} />
                            </p>
                          ) : (
                            <p className="" key={index}>
                              {d.text}
                            </p>
                          );
                        })}
                      </div>
                      <div className="pricingBtnDown">
                        <div className="btnBox">
                          <a
                            class="btn1 btn-sm undefined btn--primary btn--medium"
                            href="/contact/"
                          >
                            <span>Buy now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
      <section className="serviceBrand">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="brandBox">
                <div className="brandItems">
                  <p className="marquee">
                    <span>
                      eCommerce website &nbsp;&nbsp;&nbsp;&nbsp; |
                      &nbsp;&nbsp;&nbsp;&nbsp; Blog website
                      &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                      Portfolio website &nbsp;&nbsp;&nbsp;&nbsp; |
                      &nbsp;&nbsp;&nbsp;&nbsp; Event website
                      &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                      Personal website &nbsp;&nbsp;&nbsp;&nbsp; |
                      &nbsp;&nbsp;&nbsp;&nbsp; Membership website
                      &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                      Nonprofit website &nbsp;&nbsp;&nbsp;&nbsp; |
                      &nbsp;&nbsp;&nbsp;&nbsp; Informational website
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="serviceBrand">
        <div className="wrapper">
          <Container fluid className="p-0">
            <Row>
              <Col lg={12}>
                <div className="serviceContain my-5">
                  <div className="text-center mx-auto">
                    <h2>Ready to take things to the next level?</h2>
                    <div className="ServiceEndButton mt-5">
                      <a
                        href="#"
                        className="btn1 btn-sm btn--primary undefined btn--medium"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default PricingTable;
