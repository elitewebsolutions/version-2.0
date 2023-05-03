import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function ServiceBrand({ brand }) {

  return (
    <section className="serviceBrand">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="brandBox">
                {
                  brand?.items?.map((i, index) => {
                    return (
                      <div className="brandItems">
                        <p className="marquee">
                          <span>eCommerce website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Blog website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Portfolio website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Event website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Personal website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Membership website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Nonprofit website &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; Informational website</span>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  );
}

export default ServiceBrand;
