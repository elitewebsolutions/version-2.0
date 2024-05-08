import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

function Web({ toggle, handleClick }) {
  const [scroll, setScroll] = useState(false);
  const onScrollChange = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScrollChange);
  // Filter out the "Contact" link if onMobile is true
  const filteredMenuItems = MenuItems.filter((item) => !item.onMobile);
  console.log(filteredMenuItems);

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
                {filteredMenuItems.map((item, index) => {
                  return (
                    <li key={index} className={item.sMenu ? "submenu" : ""}>
                      <NavLink to={item.url} className={item.cName}>
                        {item.title}
                      </NavLink>

                      {item.sMenu ? (
                        <ul className="web">
                          {item.sMenu.map((itemsub, index1) => (
                            <li key={index1}>
                              <NavLink
                                to={itemsub.url}
                                className={itemsub.cName}
                              >
                                {itemsub.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>
              <Link to="/contact">
                <div className="header-btn">
                  <button
                    buttonSize="btn--medium"
                    btnHeader="header-btn-none"
                    className="btn1 btn-sm btn--primary btn--medium"
                  >
                    <span>Contact</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Web;
