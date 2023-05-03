import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Home/home.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Project({ image1, content1, image2, content2 }) {
  return (
    <section className="ProjectHomePage ProjectAboutPage">
      <div className="wrapper1">
        <Container fluid className="p-0">
          <Row className="align-items-center">
            <Col className="col-lg-6 col-xl-7">
              <div className="projectBoxImageHome">
                <img
                  src={image1 && image1?.fields?.file?.url}
                  className="img-size"
                  alt="box"
                />
              </div>
            </Col>
            <Col className="col-lg-6 col-xl-5">
              <div className="projectHomePage right-spacing">
                {documentToReactComponents(content1)}
                <div className="mt-5">
                  <a
                    className="btn1 btn-sm undefined btn--primary btn--medium"
                    href="#"
                  >
                    View our work
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 align-items-center reverse-project">
            <Col className="col-lg-6 col-xl-5">
              <div className="projectHomePage left-spacing">
                <span>
                  {documentToReactComponents(content2)}
                  <div className="mt-5">
                    <a
                      className="btn1 btn-sm undefined btn--primary btn--medium"
                      href="#"
                    >
                      View our work
                    </a>
                  </div>
                </span>
              </div>
            </Col>
            <Col className="col-lg-6 col-xl-7">
              <div className="projectBoxImageHome">
                <img
                  src={image2 && image2?.fields?.file?.url}
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

export default Project;
