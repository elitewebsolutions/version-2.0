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
                    <a href="tel:+16156320630">+1 (615) 6320 630</a>
                    </p>
                    <p className="email-footer">
                      <a href="mailto:contact@elitewebsolutions.co">
                        contact@elitewebsolutions.co
                      </a>
                    </p>
                    <p className="location-footer">
                      <a id="custom-link-dissable" href="https://www.google.com/maps/dir//Huntington+Dr,+Murfreesboro,+TN+37130/@35.8632245,-86.3779161,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8864077f9c19aa03:0x3c7dc50919704dd1!2m2!1d-86.3779161!2d35.8632245" target="_blank" rel="noopener noreferrer">
                      2615, Medical Center, Parkway Suite 1560, Murfreesboro Tennessee, US - 37129</a>
                    </p>
                    <p className="location-footer">
                      <a href="https://www.google.com/maps/dir//Shivalik+Shilp,+Iskcon+Cross+Rd,+Sanidhya,+Ahmedabad,+Gujarat+380015/@23.027029,72.5037668,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x395e9b398e5880f1:0x32614b29d1226274!2m2!1d72.5063417!2d23.0270241!3e0?entry=ttu" target="_blacnk" rel="noopener noreferrer">1111, Shivalik Shilp, Iskcon Cross Road, S.G Highway, Ahmedabad, Gujarat - 380015</a>
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
