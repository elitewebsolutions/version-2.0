import React, { useEffect, useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Header({ toggle, handleClick }) {
  const [scroll, setScroll] = useState(false);
  const onScrollChange = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

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
              <div className="menu-icons" onClick={()=>handleClick()}>
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
                <a
                  href="/contact/"
                  buttonSize="btn--medium"
                  btnHeader="header-btn-none"
                  className="btn1 btn-sm btn--primary btn--medium"
                >
                  Get Free Website Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
