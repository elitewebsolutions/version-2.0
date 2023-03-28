import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/home/home1.png";

function AboutLanding() {
    return (
        <section className="homePage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>

                            <div className="homeContent">
                                <div>
                                    <h3>About Us</h3>
                                    <h1>We do great things together</h1>
                                </div>
                            </div>




                        </Col>
                        <Col lg={6}>
                            <div className="homeImageBox">
                                <img src={box} className="img-size" alt="box" />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default AboutLanding;
