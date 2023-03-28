import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
function ProjectRating() {
    return (
        <section className="ProjectRatingPageHome mt-5">
            <div className="wrapper">
                <Container fluid className="text-center p-0">

                    <Row style={{ marginTop: "7em" }}>
                        <Col lg={3} className="">
                            <div className="serviceHomeCardBox ">
                                <div className="funFact_review_items">
                                    <div className="review_title">
                                        <h2>
                                            <CountUp end={3} duration={3} />
                                            +
                                        </h2>
                                    </div>
                                    <div className="review_comments">
                                        <p>Year of Success</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} >
                            <div className="serviceHomeCardBox ">
                                <div className="funFact_review_items">
                                    <div className="review_title">
                                        <h2>
                                            <CountUp end={432} duration={3} />
                                            +
                                        </h2>
                                    </div>
                                    <div className="review_comments">
                                        <p>Project Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} >
                            <div className="serviceHomeCardBox ">
                                <div className="funFact_review_items">
                                    <div className="review_title">
                                        <h2>
                                            <CountUp end={220} duration={3} />
                                            +
                                        </h2>
                                    </div>
                                    <div className="review_comments">
                                        <p>Regular Clients</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} >
                            <div className="serviceHomeCardBox ">
                                <div className="funFact_review_items">
                                    <div className="review_title">
                                        <h2>
                                            <CountUp end={736} duration={3} />
                                            +
                                        </h2>
                                    </div>
                                    <div className="review_comments">
                                        <p>positive Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ProjectRating;
