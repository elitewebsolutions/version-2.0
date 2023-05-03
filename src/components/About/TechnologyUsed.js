import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TechnologyUsed({ tech }) {
  return (
    <section className="PartnerHomePage partnerAboutBlock">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row className="justify-content-between align-items-center">
            <Col xl={4}>
              <div className="partnerTitle">
                <div className="partnerInnerTitle">
                  <h2>Technologies We are master in</h2>
                </div>
              </div>
            </Col>
            <Col xl={7}>
              <div className="partnerLogo">
                <Row className="text-center">
                  {tech?.map((img, index) => {
                    return (
                      <Col className="singlePartnerLogo">
                        <div className="partnerLogo">
                          <img
                            src={img?.fields?.image?.fields?.file?.url}
                            alt="logo"
                          />
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default TechnologyUsed;
