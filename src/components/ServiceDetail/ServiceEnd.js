import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ServiceEnd({ content }) {
  const fieldsArray = Object.values(content);

  return (
    <section className="serviceBrand">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="serviceContain my-5">
                {fieldsArray?.slice(0, 1)?.map((item, index) => (
                  <div className="text-center mx-auto" key={index}>
                    <h2>{item.serviceEndTitle}</h2>
                    {
                      (item.serviceEndTitle)
                      ? <p>{item.serviceEndSubTitle}</p>
                      : ''
                    }
                    <div className="ServiceEndButton mt-4">
                      <a
                        href={item.serviceEndButtonLink}
                        className="btn1 btn-sm btn--primary undefined btn--medium"
                      >
                        <span>{item.serviceEndButtonText}</span>
                      </a>
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

export default ServiceEnd;
