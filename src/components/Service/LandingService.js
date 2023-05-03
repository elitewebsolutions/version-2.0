import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import useContentful from "../../useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function LandingService() {
  const [home, setHome] = useState([]);
  const { getServicesLanding } = useContentful();

  useEffect(() => {
    getServicesLanding().then((res) => {
      setHome(res);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="homePage serviceLandingPage">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={7}>
              <div className="homeContent">
                <div className="homeContentInner">
                  {home?.items?.map((item, index) => (
                    <div key={index}>
                      <span>
                        {documentToReactComponents(item.fields.heading)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="homeImageBox">
                {home?.items?.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.fields.image?.fields.file.url}
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

export default LandingService;
