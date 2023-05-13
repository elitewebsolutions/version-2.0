import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Container, Modal } from "react-bootstrap";
import audit_img from "../../assets/audit-website.png"

function Header({ toggle, handleClick }) {
  const [scroll, setScroll] = useState(false);
  const onScrollChange = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  window.addEventListener("scroll", onScrollChange);

  return (
    <>
      <nav className={scroll ? "NavbarContainer nav-bg" : "NavbarContainer"}>
        <div className="wrapper header-wrapper">
          <div className="NavbarItems">
            <div className="navbar-logo">
              <NavLink to="/">
                <img
                  src={
                    "https://images.ctfassets.net/fb149n9elc9g/54RHjYcae4o73YJ7RUEmJm/eca560cbf12af9a4c90b6c4ad5b5cb35/admin-logo.svg"
                  }
                  alt="logo"
                />
              </NavLink>
            </div>

            <div className="right-header">
              <div className="menu-icons" onClick={() => handleClick()}>
                {toggle ? (
                  <AiOutlineClose className="mobile-icon" />
                ) : (
                  <HiOutlineMenuAlt1 className="mobile-icon" />
                )}
              </div>

              <ul className={toggle ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={item.url} className={item.cName}>
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              <div className="header-btn">
                <button
                  buttonSize="btn--medium"
                  btnHeader="header-btn-none"
                  className="btn1 btn-sm btn--primary btn--medium"
                  onClick={() => handleShow()}
                >
                  Get Free Website Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*Model */}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><img src={audit_img} alt="logo" /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid className="p-0">
            <iframe
              src="https://64601ed95d79021fa898b1a9--luminous-taiyaki-5bf7b0.netlify.app/"
              title="audit"
              frameborder="0"
              width={"100%"}
              height={330}
            ></iframe>
          </Container>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
