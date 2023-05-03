import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
function ProjectRating({ rating }) {
    return (
        <section className="ProjectRatingPageHome mt-5">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row className="justify-content-between" style={{ marginTop: "7em" }}>
                        {
                            rating?.map((d, index) => {
                                return (
                                    <Col className="mb-4 singleRatingHome" key={index}>
                                        <div className="serviceHomeCardBox ">
                                            <div className="funFact_review_items">
                                                <div className="review_icon">
                                                  <img
                                                    key={index}
                                                    src={d.fields.icon?.fields.file.url}
                                                    className="img-size"
                                                    alt="box"
                                                  />
                                                </div>
                                                <div className="review_title">
                                                    <h2>
                                                        <CountUp end={d?.fields?.totalReview} duration={3} />
                                                        +
                                                    </h2>
                                                </div>
                                                <div className="review_comments">
                                                    <p>{d?.fields?.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ProjectRating;
