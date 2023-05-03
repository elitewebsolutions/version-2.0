import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/contact/contact-image.png"

function ContactLanding() {

    return (
        <section className="contactLandingPgae serviceLandingPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                <div className="homeContentInner">
                                    <h3>Contact Us</h3>
                                    <h1>Transform your ideas into reality</h1>
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

export default ContactLanding;
