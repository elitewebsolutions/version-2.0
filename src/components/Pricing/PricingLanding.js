import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/service/serv.png"

function PricingLanding() {

    return (
        <section className="serviceLandingPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                <div>
                                    <h1 className="w-50">Our Pricing</h1>
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

export default PricingLanding;
