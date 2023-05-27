import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

function Mobile({ toggle, handleClick }) {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

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
              <div className="menu-icons" onClick={() => handleClick()}>
                {toggle ? (
                  <AiOutlineClose className="mobile-icon" />
                ) : (
                  <HiOutlineMenuAlt1 className="mobile-icon" />
                )}
              </div>

              <div className={toggle ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                  return (
                    <div key={index} className={item.sMenu ? "submenu" : ""}>
                      {item.subMenu ? (
                        <div
                          className="servBox  d-flex justify-content-between align-items-center"
                          onClick={() => handleToggle()}
                        >

                          <NavLink to={item.url} className={item.cName}>
                            {item.title}
                          </NavLink>
                          <div className="px-3">
                            <FiChevronDown
                              className={show ? "moveDeg" : "reveDeg"}
                              color={"black"}
                              size={25}
                            />
                          </div>
                        </div>
                      ) : (
                        <NavLink to={item.url} className={item.cName}>
                          {item.title}
                        </NavLink>
                      )}
                      {show && item.sMenu && item.subMenu ? (
                        <div className="mobileBack">
                          {item.sMenu.map((itemsub, index1) => (
                            <div key={index1}>
                              <NavLink
                                to={itemsub.url}
                                className={itemsub.cName}
                              >
                                {itemsub.title}
                              </NavLink>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Mobile;
