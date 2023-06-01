import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/pricing/pricing-img.png"

function PricingLanding() {

    return (
        <section className="homePage serviceLandingPage pricingLandingPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={7}>
                            <div className="homeContent">
                                <div className="homeContentInner">
                                    <h3>Pricing</h3>
                                    <h1>Discover your ideal maintenance plan</h1>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
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

export default PricingLanding;
