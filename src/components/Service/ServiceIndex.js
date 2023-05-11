import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceIndex(props) {
  let { logo, summary, serviceImage, mediaTechnologyUsed, slug } =
    props.item?.fields;

  slug = slug.split(/[/]+/g).join("-").toLowerCase();

  return (
    <section className="homePage mb-4" id={slug}>
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row
            className={`${
              props.index % 2 === 0
                ? "flex-row justify-content-center"
                : "flex-row-reverse"
            }`}
          >
            <Col lg={6}>
              <div className="serviceImageBox">
                <img
                  src={serviceImage?.fields?.file.url}
                  className="img-size"
                  alt="box"
                  style={
                    props.index % 2 === 0
                      ? { left: "-9em" }
                      : { right: "-10em" }
                  }
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="aboutContent">
                <div>
                  <div className="logoService mb-3">
                    <img src={logo?.fields?.file.url} alt="logo" width="45" />
                  </div>
                  <div>{documentToReactComponents(summary)}</div>

                  <div>
                    <Link
                      className="btn1 btn-sm undefined btn--primary undefined btn--medium"
                      to={`/services/${slug}/`}
                    >
                      <span>Read More</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-4 d-flex gap-4 align-items-center">
                  {mediaTechnologyUsed?.map((i, index) => {
                    return (
                      <div className="serviceIconBox" key={index}>
                        <img src={i?.fields.file.url} alt="icon" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ServiceIndex;
