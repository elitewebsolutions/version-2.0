import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import footer_icon from "../../assets/footer-icon.png";

function Footer() {
  return (
    <>
      <section className="footerPage">
        <div className="wrapper">
          <Container fluid className="p-0">
            <Row>
              <Col lg={6}>
                <div className="mainFooter_nav1">
                  <div className="mainFooter_image">
                    <NavLink to="/">
                      <img src={footer_icon} alt="Footer Logo" />
                    </NavLink>
                    <p>
                      Welcome to <strong>Elite Web Solutions</strong>, where we
                      empower businesses to establish and maintain a strong
                      online presence. Our goal is to help businesses of all
                      sizes succeed online.{" "}
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-6 col-lg-3">
                <div className="footerExplore">
                  <h5>Explore Links</h5>
                  <div className="mt-4 d-flex flex-column gap-3 footerlinks">
                    <p>
                      <a href="/">Home</a>
                    </p>
                    <p>
                      <a href="/services">Services</a>
                    </p>
                    <p>
                      <a href="/portfolio">Portfolio</a>
                    </p>
                    <p>
                      <a href="/about-us">About us</a>
                    </p>
                    <p>
                      <a href="/contact">Contact</a>
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="col-md-6 col-lg-3">
                <div className="footerExplore footercontact">
                  <h5>Contact Us</h5>
                  <div className="mt-4 d-flex flex-column gap-3">
                    <p className="email-footer">
                      <a href="mailto:contact@elitewebsolutions.co">
                        contact@elitewebsolutions.co
                      </a>
                    </p>
                    <p className="location-footer">
                      Huntington Drive Apt E4, Murfreesboro 37130, Tennessee, US
                    </p>
                    <p className="location-footer">
                      327, Sv square, New Ranip, Ahmedabad 380081, Gujarat,
                      India
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="mainFooter_copyright">
            <p>
              Copyright 2023 all rights reserved by{" "}
              <strong>Elite Web Solutions</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
