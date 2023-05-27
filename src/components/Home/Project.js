import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Project({ home }) {
  return (
    <section className="ProjectHomePage">
      <div className="wrapper1">
        <Container fluid className="p-0">
          <Row className="top-project align-items-center">
            <Col className="col-lg-6 col-xl-7">
              {home?.items?.map((item, index) => (
                <div className="projectBoxImageHome" key={index}>
                  <img
                    key={index}
                    src={item.fields.bannerFourImage?.fields.file.url}
                    className="img-size"
                    alt="box"
                  />
                </div>
              ))}
            </Col>
            <Col className="col-lg-6 col-xl-5">
              <div className="projectHomePage right-spacing">
                {home?.items?.map((item, index) => (
                  <div key={index}>
                    {documentToReactComponents(item.fields.bannerFourContent)}

                    <div className="mt-5">
                      <a
                        className="btn1 btn-sm undefined btn--primary btn--medium"
                        href={item.fields.fourButtonLink}
                      >
                        <span>{item.fields.fourButton}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
          <Row className="bottom-project mt-5 align-items-center reverse-project">
            <Col className="col-lg-6 col-xl-5">
              <div className="projectHomePage left-spacing">
                {home?.items?.map((item, index) => (
                  <div key={index}>
                    <span>
                      {documentToReactComponents(
                        item.fields.bannerFourContentTwo
                      )}
                    </span>
                    <div className=" mt-4">
                      <a
                        className="btn1 btn-sm undefined btn--primary btn--medium"
                        href={item.fields.fourButtonLinkTwo}
                      >
                        <span>{item.fields.fourButtonTwo}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col className="col-lg-6 col-xl-7">
              {home?.items?.map((item, index) => (
                <div className="projectBoxImageHome" key={index}>
                  <img
                    key={index}
                    src={item.fields.bannerFourImageTwo?.fields.file.url}
                    className="img-size"
                    alt="box"
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Project;
