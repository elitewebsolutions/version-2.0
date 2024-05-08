import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
import com from "../../assets/contact/contact-form-img.png";
import geticon from "../../assets/contact/get-in-touch-icon.png";
import mail from "../../assets/contact/mail.png";
import facebook from "../../assets/contact/facebook.png";
import instagram from "../../assets/contact/instagram.png";
import linkedin from "../../assets/contact/linkedin.png";

function ContactForm() {
  return (
    <section className="ContactFormPage">
      <div className="wrapper">
        <Container fluid className="p-0">
          <Row>
            <Col className="col-lg-5 col-xl-4">
              <div className="contactFormImg">
                <img src={com} alt="com" />
              </div>
              <div className="ContactRoundBox">
                <div className="ContactRoundBoxCover">
                  <div className="contacFormCoverTitle">
                    <span className="call-icon">
                      <img src={geticon} alt="Get in touch" />
                    </span>
                    <span className="email-address">
                      <a href="mailto:contact@elitewebsolutions.co">
                        <img src={mail} alt="Email" />
                        Contact@elitewebsolutions.co
                      </a>
                    </span>
                    <ul className="social-icons">
                      <li>
                        <a
                          href="https://www.facebook.com/elitewebsolutions1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={facebook} alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com/elitewebsolutions_?igshid=YmMyMTA2M2Y="
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={instagram} alt="Instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/elite-websolutions/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={linkedin} alt="Linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-7 col-xl-8">
              <div className="partnerLogo">
                <Row className="">
                  <div className="ContactFormFieldBox d-flex justify-content-center flex-column align-items-center">
                    <h2>Get in touch</h2>
                    <p>
                      You can be confident that your online presence is in good
                      hands.
                    </p>
                  </div>

                  <>
                    <iframe
                      src="https://link.axeplatform.com/widget/form/Rgkttw8RZqNc03npX4kp"
                      style={{
                        width: "100%",
                        marginTop: "50px",
                        height: "calc(100vh - 150px)",
                        border: "none",
                        borderRadius: "10px",
                      }}
                      id="inline-Rgkttw8RZqNc03npX4kp"
                      data-layout="{'id':'INLINE'}"
                      data-trigger-type="alwaysShow"
                      data-trigger-value=""
                      data-activation-type="alwaysActivated"
                      data-activation-value=""
                      data-deactivation-type="neverDeactivate"
                      data-deactivation-value=""
                      data-form-name="Contact Us Form"
                      data-layout-iframe-id="inline-Rgkttw8RZqNc03npX4kp"
                      data-form-id="Rgkttw8RZqNc03npX4kp"
                      title="Contact Us Form"
                    ></iframe>

                    <script src="https://link.axeplatform.com/js/form_embed.js"></script>
                  </>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ContactForm;
