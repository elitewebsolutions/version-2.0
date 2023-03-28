import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button } from "../Button/Button";

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
                      <img
                        src={
                          "https://images.ctfassets.net/fb149n9elc9g/54RHjYcae4o73YJ7RUEmJm/eca560cbf12af9a4c90b6c4ad5b5cb35/admin-logo.svg"
                        }
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                  <div className="footerInputBox mt-5">
                    <p>We empower business to succees online.</p>

                    <div className="footerInputField d-flex gap-2">
                      <input type="text" />
                      <Button className="btn--medium">search</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footerExplore">
                  <h5>Explore Link</h5>
                  <div className="mt-4 d-flex flex-column gap-3">
                    <span>Home</span>
                    <span>Discover</span>
                    <span>Universe</span>
                    <span>Games</span>
                    <span>Bussiness Opportunities</span>
                    <span>Product</span>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="footerExplore">
                  <h5>Contact Us</h5>
                  <div className="mt-4 d-flex flex-column gap-3">
                    <span>Home</span>
                    <span>Discover</span>
                    <span>Universe</span>
                    <span>Games</span>
                    <span>Bussiness Opportunities</span>
                    <span>Product</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="mainFooter_copyright">
            <p>
              Copyright © 2022 all rights reserved{" "}
              <strong>Elite Web Solutions</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
