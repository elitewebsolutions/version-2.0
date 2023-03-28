import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import icon from "../../assets/home/icon2.png"
import { Button } from "../Button/Button";

import "./home.css";
function OurRecentWork() {
    return (
        <section className="ProjectHomePage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row className="">
                        <Col lg={12}>
                            <div className="text-center ourWorkrecentHome">
                                <h2>
                                    Our Recent Work
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vel?
                                </p>
                            </div>
                        </Col>
                        <div className="mt-4">

                            {
                                [...new Array(3)].map((i, index) => {
                                    return (
                                        index % 2 === 0 ?

                                            <Row className="mb-4">
                                                <Col lg={4}>
                                                    <div className="ourRecentWorkHomeBox" style={{ backgroundColor: "#e6cd2b" }}>
                                                        <img src={icon} alt="" />
                                                        <h6 className="text-white">
                                                            Westin Hotels
                                                        </h6>
                                                        <div className="d-flex gap-4 justify-content-end align-items-center mt-3">

                                                            <span style={{ fontSize: "12px", color: "white", fontWeight: "bold", cursor: "pointer" }}>VISIT SITE</span>

                                                            <Button>

                                                                VIEW CASE STUDY
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                                <Col lg={8}>
                                                    <div className="ourRecentWorkHomeBox" style={{ backgroundColor: "violet" }}>
                                                        <img src={icon} alt="" />
                                                        <h6 className="text-white">
                                                            Westin Hotels
                                                        </h6>
                                                        <div className="d-flex gap-4 justify-content-end align-items-center mt-3">

                                                            <span style={{ fontSize: "12px", color: "white", fontWeight: "bold", cursor: "pointer" }}>VISIT SITE</span>

                                                            <Button>

                                                                VIEW CASE STUDY
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>






                                            : <Row className="mb-4">
                                                <Col lg={8}>
                                                    <div className="ourRecentWorkHomeBox" style={{ backgroundColor: "#e6cd2b" }}>
                                                        <img src={icon} alt="" />
                                                        <h6 className="text-white">
                                                            Westin Hotels
                                                        </h6>
                                                        <div className="d-flex gap-4 justify-content-end align-items-center mt-3">

                                                            <span style={{ fontSize: "12px", color: "white", fontWeight: "bold", cursor: "pointer" }}>VISIT SITE</span>

                                                            <Button>

                                                                VIEW CASE STUDY
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={4}>
                                                    <div className="ourRecentWorkHomeBox" style={{ backgroundColor: "violet" }}>
                                                        <img src={icon} alt="" />
                                                        <h6 className="text-white">
                                                            Westin Hotels
                                                        </h6>
                                                        <div className="d-flex gap-4 justify-content-end align-items-center mt-3">

                                                            <span style={{ fontSize: "12px", color: "white", fontWeight: "bold", cursor: "pointer" }}>VISIT SITE</span>

                                                            <Button>

                                                                VIEW CASE STUDY
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>


                                    )
                                })
                            }
                        </div>

                    </Row>
                    <div className="text-center justify-content-center d-flex gap-3 align-items-center" style={{ cursor: "pointer" }}>
                        <span className="">
                            <BsFillArrowRightCircleFill size={30} />
                        </span>
                        <span className="ml-4 fw-bold">
                            VIEW ALL PROJECTS
                        </span>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default OurRecentWork;
