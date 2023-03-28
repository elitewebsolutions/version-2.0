import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/home/partner.jpeg"

function TechnologyUsed() {
    return (
        <section className="PartnerHomePage ">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row className="align-items-center">
                        <Col lg={4}>
                            <div className="partnerTitle">
                                <h2>
                                    Technologies We are master in
                                </h2>

                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="partnerLogo">
                                <Row className='text-center  align-items-center' style={{ border: "1px solid #8080802e" }}>
                                    {
                                        [...new Array(15)].map((img, index) => {
                                            return (
                                                <Col lg={4} className="py-4" style={{ width: "20%", border: "1px solid #8080802e" }} key={index}>
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

export default TechnologyUsed