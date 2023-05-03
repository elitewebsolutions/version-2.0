import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceExplain({ description, image }) {
  return (
    <section className="serviceDetPageExp">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="serviceExpContent">
                {documentToReactComponents(description)}
              </div>
            </Col>
            <Col lg={6}>
              <div className="homeImageBox serviceExpImg">
                <img src={image} className="img-size" alt="box" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceExplain;
