import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/service/ser3.png";

function ServiceExplain() {
  return (
    <section className="serviceDetPageExp mb-5">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div>
                <p>
                  WordPress is a popular and powerful content management system
                  that can help businesses build and maintain a professional
                  website. Our team are expert in building and maintaining
                  websites using this platform and can help businesses customize
                  their site with custom plugin development, theme
                  customization, and integrations with other tools and services{" "}
                  <br />
                  <br />
                  We will work closely with you to ensure that your website is
                  fully optimized to achieve your business objectives and meet
                  the needs of your target audience. We'll design and develop a
                  website that is both visually appealing and user-friendly.
                  Trust us to help you build and maintain a professional website
                  that will drive your business forward.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="homeImageBox serviceExpImg">
                <img src={box} className="img-size" alt="box" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceExplain;
