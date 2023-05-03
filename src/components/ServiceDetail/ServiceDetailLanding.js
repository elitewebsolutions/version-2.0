import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import btn_gradient_arrow from "../../assets/btn-gradient-arrow.png";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceDetailLanding({ heading, image }) {
  return (
    <section className="homePageDetailPage serviceDetailLanding">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row style={{ padding: "4em 0" }} className="flex-row-reverse">
            <Col md={8}>
              <div className="homeContent">
                <div>{documentToReactComponents(heading)}</div>
              </div>

              <div
                className="serviceBtnHomePage d-flex gap-2 align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img src={btn_gradient_arrow} className="img-size" alt="box" />
                <span>READ MORE</span>
              </div>
            </Col>

            <Col md={4}>
              <div className="serviceDetImageBox">
                <img src={image} className="img-size" alt="box" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceDetailLanding;
