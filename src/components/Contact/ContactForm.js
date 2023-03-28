import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css"
import com from "../../assets/b.png"
import { Button } from '../Button/Button';

function ContactForm() {
    return (
        <section className="ContactFormPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row >
                        <Col lg={4}>
                            <div className="d-flex" style={{ position: 'relative' }}>
                                <div className="contactFormImg">
                                    <img src={com} alt="com" />
                                </div>
                                <div className="ContactRoundBox">
                                    <div className="ContactRoundBoxCover">
                                        <div className="contacFormCoverTitle">
                                            <h2>Our Services</h2>
                                            <span className="text-center">
                                                {" "}
                                                Ut vitae erat tempus, voueoweuowe oewue owu
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="partnerLogo">
                                <Row className=''>
                                    <div className="ContactFormFieldBox d-flex justify-content-center flex-column align-items-center">
                                        <h2>
                                            Get in touch
                                        </h2>
                                        <span>Please fill out below form.</span>
                                        <span>We will get back to you soon.</span>

                                    </div>

                                    <div className="rightPartContact mt-5">
                                        <div className="contactForm">
                                            <div className="halfContact">
                                                <input className='halfWidth' type="text" placeholder="First Name" />
                                                <input className='halfWidth' type="text" placeholder="Last Name" />
                                                <input className='halfWidth' type="text" placeholder="Email ID" />
                                                <input className='halfWidth' type="text" placeholder="Phone No" />
                                                <input type="text" className='fullWidth' placeholder="Subject" />
                                                <input type="text" className='fullWidth mt-5' placeholder="Message" />
                                            </div>

                                            <div className="sendMessage text-center mt-5">
                                                <Button>Send Message</Button>
                                            </div>
                                        </div>






                                    </div>


                                </Row>

                            </div>
                        </Col>

                    </Row >

                </Container >
            </div >

        </section >
    )
}

export default ContactForm