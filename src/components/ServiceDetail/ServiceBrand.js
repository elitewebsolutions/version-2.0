import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function ServiceBrand() {
  return (
    <section className="serviceBrand">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="brandBox d-flex justify-content- align-items-center">
                {[...new Array(19)].map((i, index) => {
                  return (
                    <div className="brandItems d-flex justify-content-between align-items-center">
                      <span>BLOG WEBSITE</span>
                    </div>
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

export default ServiceBrand;
