import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import btn_arrow from "../../assets/btn-arrow.png";

function Home({ home }) {
  return (
    <section className="homePage">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="justify-content-between">
            <Col lg={5}>
              <div className="homeContent">
                {home?.items?.map((item, index) => (
                  <div className="homeContentInner" key={index}>
                    <span>
                      {documentToReactComponents(item.fields.heading)}
                    </span>
                  </div>
                ))}
                {home?.items?.map((item, index) => {
                  return (
                    <div
                      className="serviceBtnHomePage d-flex align-items-center"
                      key={index}
                    >
                      <a href={item.fields.firstLink}>
                        <img src={btn_arrow} className="img-size" alt="box" />
                      </a>
                      <a href={item.fields.firstLink}>{item.fields.linkText}</a>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col lg={6}>
              <div className="homeImageBox">
                {home?.items?.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.fields.homeLandingImage?.fields.file.url}
                      className="img-size"
                      alt="box"
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Home;
