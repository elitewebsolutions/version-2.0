import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import box from "../../assets/service/ser1.png";

function ServiceDetailLanding() {
  return (
    <section className="homePageDetailPage mb-5">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row style={{ padding: "4em 0" }} className="flex-row-reverse">
            <Col lg={8}>
              <div className="homeContent">
                <h3>Get customizable templates for your </h3>
                <h1>For Mindful Brands</h1>
              </div>

              <div
                className="serviceBtnHomePage d-flex gap-2 align-items-center"
                style={{ cursor: "pointer" }}
              >
                <span>
                  <BsFillArrowRightCircleFill size={30} />
                </span>
                <span>READ MORE</span>
              </div>
            </Col>

            <Col lg={4}>
              <div className="serviceDetImageBox">
                <img src={box} className="img-size" alt="box" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceDetailLanding;
