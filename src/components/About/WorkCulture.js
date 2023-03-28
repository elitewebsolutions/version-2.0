import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../../assets/home/icon2.png";

function OurWorkCulture() {
  return (
    <section className="ProjectHomePage ">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="">
            <Col lg={12}>
              <div className="text-center ourWorkrecentHome">
                <h2>Our Work Culture</h2>
              </div>
            </Col>
            <div className="mt-5">
              <Row>
                {[...new Array(6)].map((i, index) => {
                  return index % 2 === 0 ? (
                    <Col lg={3} className="mb-5">
                      <div
                        className="ourRecentWorkHomeBox"
                        style={{ backgroundColor: "#fe0e22", height: "60dvh" }}
                      >
                        <img src={icon} alt="" />
                      </div>
                    </Col>
                  ) : (
                    <Col lg={3} style={{ marginTop: "4em" }}>
                      <div
                        className="ourRecentWorkHomeBox"
                        style={{ backgroundColor: "#2be824", height: "60dvh" }}
                      >
                        <img src={icon} alt="" />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default OurWorkCulture;
