import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./home.css";
function Services() {
  return (
    <section className="servicePageHome mt-5">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={12}>
              <div className="py-4 serviceContentHome">
                <div className="serviceCoverHome">
                  <div className="serviceTitle">
                    <h2>Our Services</h2>
                    <span className="text-center">
                      {" "}
                      Ut vitae erat tempus, voueoweuowe oewue owu
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Row style={{ marginTop: "10em" }}>
              <Col lg={3} className="rightBar">
                <div className="serviceHomeCardBox ">
                  <div className="mt-5 serviceHomeCard d-flex align-items-center flex-column">
                    <div className="serviceHomeCardImg">
                      <img
                        src="https://images.ctfassets.net/fb149n9elc9g/AoPfnpHMpVrJ0cL7lu6lV/3b7ba6777f76866579f528e5aa6fbfb2/ux.png"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-3">Wordpress Development</h5>
                    <p className="text-center mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, quam.
                    </p>
                    <span className="mt-2">
                      <BsFillArrowRightCircleFill size={30} />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="rightBar">
                <div className="serviceHomeCardBox">
                  <div className="mt-5 serviceHomeCard d-flex align-items-center flex-column">
                    <div className="serviceHomeCardImg">
                      <img
                        src="https://images.ctfassets.net/fb149n9elc9g/AoPfnpHMpVrJ0cL7lu6lV/3b7ba6777f76866579f528e5aa6fbfb2/ux.png"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-3">Wordpress Development</h5>
                    <p className="text-center mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, quam.
                    </p>
                    <span className="mt-2">
                      <BsFillArrowRightCircleFill size={30} />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={3} className="rightBar">
                <div className="serviceHomeCardBox ">
                  <div className="mt-5 serviceHomeCard d-flex align-items-center flex-column">
                    <div className="serviceHomeCardImg">
                      <img
                        src="https://images.ctfassets.net/fb149n9elc9g/AoPfnpHMpVrJ0cL7lu6lV/3b7ba6777f76866579f528e5aa6fbfb2/ux.png"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-3">Wordpress Development</h5>
                    <p className="text-center mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, quam.
                    </p>
                    <span className="mt-2">
                      <BsFillArrowRightCircleFill size={30} />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="serviceHomeCardBox ">
                  <div className="mt-5 serviceHomeCard d-flex align-items-center flex-column">
                    <div className="serviceHomeCardImg">
                      <img
                        src="https://images.ctfassets.net/fb149n9elc9g/AoPfnpHMpVrJ0cL7lu6lV/3b7ba6777f76866579f528e5aa6fbfb2/ux.png"
                        alt=""
                      />
                    </div>
                    <h5 className="mt-3">Wordpress Development</h5>
                    <p className="text-center mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi, quam.
                    </p>
                    <span className="mt-2">
                      <BsFillArrowRightCircleFill size={30} />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Services;
