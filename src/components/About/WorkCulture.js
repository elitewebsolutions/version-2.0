import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function OurWorkCulture({ culture, title }) {
  return (
    <section className="ProjectHomePage aboutWorkCulture">
      <Container fluid className="p-0">
        <Row className="">
          <Col lg={12}>
            <div className="text-center ourWorkrecentHome">
              <h2>{title}</h2>
            </div>
          </Col>
          <div className="mt-5">
            <Row className="mt-5 CultureRowBlock">
              {culture?.map((d, index) => {
                return index % 2 === 0 ? (
                  <Col className="mb-5">
                    <div className="OurWorkCulture">
                      <img src={d?.fields?.image?.fields?.file?.url} alt="" />
                    </div>
                  </Col>
                ) : (
                  <Col style={{ marginTop: "4em" }}>
                    <div className="OurWorkCulture">
                      <img src={d?.fields?.image?.fields?.file?.url} alt="" />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default OurWorkCulture;
