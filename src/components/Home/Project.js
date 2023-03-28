import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ser1 from "../../assets/home/ser1.png";
import { Button } from "../Button/Button";
import "./home.css";
function Project() {
  return (
    <section className="ProjectHomePage">
      <div className="wrapper1">
        <Container fluid className="p-0">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="projectBoxImageHome">
                <img src={ser1} className="img-size" alt="box" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectHomePage w-75 mx-auto">
                <div>
                  <h2>Web Development & Data Science</h2>
                  <p>
                    Ut vitae erat tempus, venenatis augue eu, placerat libero.
                    Nunc interdum ligula sapien. Proin scelerisque nisi orci, at
                    vulputate ligula sollicitudin ut. Maecenas porttitor magna
                    non dictum blandit. Etiam interdum nunc sit amet lectus
                    commodo sodales.
                  </p>
                  <div className=" mt-4">
                    <Button>View Our Work</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 align-items-center">
            <Col lg={6}>
              <div className="projectHomePage w-75 mx-auto">
                <div>
                  <h2>UI and UX Deign</h2>
                  <p>
                    Ut vitae erat tempus, venenatis augue eu, placerat libero.
                    Nunc interdum ligula sapien. Proin scelerisque nisi orci, at
                    vulputate ligula sollicitudin ut. Maecenas porttitor magna
                    non dictum blandit. Etiam interdum nunc sit amet lectus
                    commodo sodales.
                  </p>
                  <div className="mt-4">
                    <Button>View Our Work</Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectBoxImageHome">
                <img src={ser1} className="img-size" alt="box" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Project;
