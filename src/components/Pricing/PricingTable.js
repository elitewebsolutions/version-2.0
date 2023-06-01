import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pricing.css";
import useContentful from "../../useContentful";
import pricing_basic from "../../assets/pricing/basic-price.png";
import pricing_premimum from "../../assets/pricing/premimum-price.png";
import pricing_right from "../../assets/pricing/price-right.png";
import pricing_wrong from "../../assets/pricing/price-wrong.png";
import pricing_question from "../../assets/pricing/question.png";

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
            <Row className="pricing-row">
              <Col lg={4} className="mb-4 mobilepricing">
                <div className="pricingBox1">
                  <div className="pricingGarentyBox">
                    {priceGuarant?.map((item, index) => {
                      return <span key={index}>{item.guarantee}</span>;
                    })}
                  </div>

                  <div
                    className="d-flex flex-column"
                    style={{ paddingTop: "16px" }}
                  >
                    {priceText?.map((item, index) => {
                      return (
                          <p key={index}><span class="tooltip-icon" data-tooltip="Tooltip Content"><img src={pricing_question} className="img-size" alt="box"/></span>{item.s}</p>
                      );
                    })}
                  </div>
                </div>
              </Col>
              <Col lg={8} className="mb-4">
              <Row className="pricing-listing">
              {priceData?.map((item, index) => {
                return (
                  <Col lg={6} className="mb-4" key={index} id={"price-" + index }>
                    <div className="pricingBox">
                      <div className="pricingGarentyBox">
                        <div class="pricing-icon">
                          <img
                            src={pricing_basic}
                            className="basic-icon img-size"
                            alt="Basic Plan"
                          />
                          <img
                            src={pricing_premimum}
                            className="premimum-icon img-size"
                            alt="Premimum Plan"
                          />
                        </div>
                        <h3>{item.title}</h3>
                        <p className="subText">{item.description}</p>
                        <h4>${item.price}</h4>
                      </div>
                      <div className="pricingchoice my-4">
                        {item.dataShow?.map((d, index) => {
                          return d.icon ? (
                            <p className="righticon" key={index}>
                              <img
                                src={pricing_right}
                                className="img-size"
                                alt="Right Icon"
                              />
                            </p>
                          ) : (
                            <p className={d.close} key={index}>
                              {d.text}
                              <img
                                src={pricing_wrong}
                                className="img-size"
                                alt="Close Icon"
                              />
                            </p>
                          );
                        })}
                      </div>
                      <div className="pricingBtnDown">
                        <div className="btnBox">
                          <a
                            class="btn1 btn-sm undefined btn--primary btn--medium"
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
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
              </Col>
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
                      &nbsp;&nbsp;&nbsp;&nbsp; Blog
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
                        href="/"
                        className="btn1 btn-sm btn--primary undefined btn--medium"
                      >
                        <span>Get Started</span>
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
