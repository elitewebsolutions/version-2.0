import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/service/serv.png"

function ContactLanding() {

    return (
        <section className="serviceLandingPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                <div>
                                    <h3>Contact Us</h3>
                                    <h1 className="w-50">Say hello to us.</h1>
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

export default ContactLanding;
