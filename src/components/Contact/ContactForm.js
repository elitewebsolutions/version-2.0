import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./contact.css";
import com from "../../assets/contact/contact-form-img.png";
import geticon from "../../assets/contact/get-in-touch-icon.png";
import mail from "../../assets/contact/mail.png";
import facebook from "../../assets/contact/facebook.png";
import instagram from "../../assets/contact/instagram.png";
import linkedin from "../../assets/contact/linkedin.png";
import { Button } from "../Button/Button";
import { showToastError, showToastSuccess } from "../../utils/constant";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b5mx6bt",
        "template_s7yf2ep",
        form.current,
        "Ue8jZziXKgOW9FHhQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          showToastSuccess("successfully send message!");
          e.target.reset();
        },
        (error) => {
          showToastError("something went wrong!");
          console.log(error.text);
        }
      );
  };

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
                        contact@elitewebsolutions.co
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

                  <div className="rightPartContact">
                    <div className="contactForm">
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="formControl"
                      >
                        <div className="halfContact">
                          <input
                            required={true}
                            className="halfWidth"
                            type="text"
                            placeholder="First Name"
                            name="user_name"
                          />
                          <input
                            required={true}
                            className="halfWidth"
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                          />
                          <input
                            required={true}
                            className="halfWidth"
                            type="text"
                            placeholder="Email ID"
                            name="user_email"
                          />
                          <input
                            required={true}
                            className="halfWidth"
                            type="text"
                            placeholder="Phone No"
                            name="user_phone"
                          />

                          <select
                            className="fullWidth"
                            name="subject"
                            required={true}
                          >
                            <option value="">Select Your Service</option>
                            <option value="WordPress Development">
                              WordPress Development
                            </option>
                            <option value="Learndash LMS Development">
                              Learndash LMS Development
                            </option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Web Maintenance">
                              Web Maintenance
                            </option>
                            <option value="Web Hosting">Web Hosting</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Email & Newsletter Designs">
                              Email & Newsletter Designs
                            </option>
                            <option value="Search Engine Optimization">
                              Search Engine Optimization
                            </option>
                            <option value="Other">Other</option>
                          </select>
                          <textarea
                            required={true}
                            className="fullWidth mt-5"
                            placeholder="Message"
                            name="message"
                          ></textarea>
                        </div>

                        <div className="sendMessage text-center mt-5">
                          <Button type="submit">Submit</Button>
                        </div>
                      </form>
                    </div>
                  </div>
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
