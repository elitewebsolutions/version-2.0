import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container, Row, Col } from "react-bootstrap";
import box2 from "../../assets/home/home2.png";
import "./home.css";
import btn_arrow from "../../assets/btn-arrow.png";

function About({ home }) {
  return (
    <section className="homeAboutSection">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={6}>
              <div className="aboutImageBox">
                <img src={box2} className="img-size" alt="box" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="aboutContent">
                {home?.items?.map((item, index) => (
                  <div key={index}>
                    {documentToReactComponents(item.fields.secondBanner)}
                  </div>
                ))}
                {home?.items?.map((item, index) => (
                  <div className="mt-5 d-flex gap-5 align-items-center">
                    <div>
                      <a
                        className="btn1 btn-sm undefined btn--primary btn--medium"
                        href={item.fields.secondButtonLink}
                      >
                        {item.fields.secondButton}
                      </a>
                    </div>

                    <div
                      className="serviceBtnHomePage d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <a href={item.fields.sideLink}>
                        <img src={btn_arrow} className="img-size" alt="box" />
                      </a>
                      <a href={item.fields.sideLink}>{item.fields.sideText}</a>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
