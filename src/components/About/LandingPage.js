import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function AboutLanding({ image, heading }) {
  return (
    <section className="homePage aboutTopBlock">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={7}>
              <div className="homeContent">
                <div className="homeContentInner">
                  {documentToReactComponents(heading)}
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="homeImageBox">
                <img
                  src={image && image?.fields?.file?.url}
                  className="img-size"
                  alt="box"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default AboutLanding;
