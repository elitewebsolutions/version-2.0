import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import footer_icon from "../../assets/footer/footer-icon.svg";
import facebook from "../../assets/footer/footer-facebook.svg";
import instagram from "../../assets/footer/footer-insta.svg";
import linkedin from "../../assets/footer/footer-linked.svg";

function Footer() {
  return (
    <>
      <section className="footerPage">
        <div className="wrapper">
          <Container fluid className="p-0">
            <Row>
              <Col className="col-md-6 col-lg-4">
                <div className="mainFooter_nav1">
                  <div className="mainFooter_image">
                    <NavLink to="/">
                      <img src={footer_icon} alt="Footer Logo" className="footer_logo" />
                    </NavLink>
                    <p>
                      Welcome to <strong>Elite Web Solutions</strong>, where we
                      empower businesses to establish and maintain a strong
                      online presence. Our goal is to help businesses of all
                      sizes succeed online.{" "}
                    </p>
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
              </Col>
              <Col className="col-md-6 col-lg-3 footer-services">
                <div className="footerExplore">
                  <h5>Services</h5>
                  <div className="mt-4 d-flex flex-column gap-3 footerlinks">
                    <p>
                      <a href="/services/wordpress-development/">WordPress Development</a>
                    </p>
                    <p>
                      <a href="/services/learndash-development/">Learndash LMS Development</a>
                    </p>
                    <p>
                      <a href="/services/web-development/">Web Development</a>
                    </p>
                    <p>
                      <a href="/services/ui-ux-development/">UI/UX Development</a>
                    </p>
                    <p>
                      <a href="/services/web-maintenance/">Web Maintenance</a>
                    </p>
                    <p>
                      <a href="/services/seo/">Search Engine Optimization</a>
                    </p>
                    <p>
                      <a href="/services/web-hosting/">Web Hosting</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-6 col-lg-2">
                <div className="footerExplore">
                  <h5>Explore Links</h5>
                  <div className="mt-4 d-flex flex-column gap-3 footerlinks">
                    <p>
                      <a href="/">Home</a>
                    </p>
                    <p>
                      <a href="/services/">Services</a>
                    </p>
                    <p>
                      <a href="/portfolio/">Portfolio</a>
                    </p>
                    <p>
                      <a href="/about-us/">About us</a>
                    </p>
                    <p>
                      <a href="/pricing/">Pricing</a>
                    </p>
                    <p>
                      <a href="/contact/">Contact</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-6 col-lg-3">
                <div className="footerExplore footercontact">
                  <h5>Contact Us</h5>
                  <div className="mt-4 d-flex flex-column gap-3">
                             <p className="email-footer">
                    <a href="tel:+1(615)6320630">+1 (615) 6320 630</a>
                    </p>
                    <p className="email-footer">
                      <a href="mailto:contact@elitewebsolutions.co">
                        Contact@elitewebsolutions.co
                      </a>
                    </p>
                    <p className="location-footer">
                      <a href="https://www.google.com/maps/dir//Huntington+Dr,+Murfreesboro,+TN+37130/@35.8632245,-86.3779161,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8864077f9c19aa03:0x3c7dc50919704dd1!2m2!1d-86.3779161!2d35.8632245" target="_blank" rel="noopener noreferrer">
                      Huntington Drive Apt E4, Murfreesboro 37130, Tennessee, US</a>
                    </p>
                    <p className="location-footer">
                      <a href="https://www.google.com/maps/search/1306,+Shivalik+Shilp,+Iskcon+Cross+Road,+S.G+Highway,+Ahmedabad,+Gujarat%C2%A0-%C2%A0380015/@23.0275836,72.4940981,16z/data=!3m1!4b1?entry=ttu" target="_blacnk" rel="noopener noreferrer">1306, Shivalik Shilp, Iskcon Cross Road, S.G Highway, Ahmedabad, Gujarat - 380015</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="mainFooter_copyright">
            <p>
              Copyright 2024 all rights reserved by{" "}
              <strong>Elite Web Solutions</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
