import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/service/serv.png"

function LandingService() {

    return (
        <section className="serviceLandingPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                <div>
                                    <h3>Our Services</h3>
                                    <h1>Specifically for
                                        your Business</h1>

                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="homeImageBox1">
                                <img src={box} className="img-size" alt="box" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default LandingService;
