import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
function ServiceEnd() {
  return (
    <section className="serviceBrand">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="serviceContain ">
                <div className="text-center">
                  <h2>
                    Ready to take things <br /> to the next level?
                  </h2>
                </div>
                <div className="ServiceEndButton mt-5 ">
                  <Button>GET STARTED</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceEnd;
