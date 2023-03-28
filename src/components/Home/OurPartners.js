import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/home/partner.jpeg"

function OurPartners() {
    return (
        <section className="PartnerHomePage ">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row >
                        <Col lg={4}>
                            <div className="partnerTitle">
                                <h2>
                                    Our Partners
                                </h2>
                                <p>
                                    Etiam tristique dictum purus ut dignissim. Donec ac neque sit amet leo lobortis commodo eu at lectus.
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="partnerLogo">
                                <Row style={{ textAlign: "right" }}>
                                    {
                                        [...new Array(9)].map((img, index) => {
                                            return (
                                                <Col lg={4} className="mb-4">
                                                    <div className="partnerLogo">
                                                        <img src={logo} alt="logo" />
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>

                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>

        </section>
    )
}

export default OurPartners