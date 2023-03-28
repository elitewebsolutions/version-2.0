import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import box2 from "../../assets/home/home2.png";
import { Button } from "../Button/Button";
import "./home.css";
function About() {
  return (
    <section className="homePage">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col lg={6}>
              <div className="aboutImageBox">
                <img src={box2} className="img-size" alt="box" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="aboutContent">
                <div>
                  <h2>About Us</h2>
                  <p>
                    Ut vitae erat tempus, venenatis augue eu, placerat libero.
                    Nunc interdum ligula sapien. Proin scelerisque nisi orci, at
                    vulputate ligula sollicitudin ut. Maecenas porttitor magna
                    non dictum blandit. Etiam interdum nunc sit amet lectus
                    commodo sodales.
                  </p>
                </div>
                <div className="mt-4 d-flex gap-4 align-items-center">
                  <div>
                    <Button>OUR WORK</Button>
                  </div>

                  <div
                    className="serviceBtnHomePage d-flex gap-2 align-items-center"
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <BsFillArrowRightCircleFill size={30} />
                    </span>
                    <span>OUR SERVICES</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
