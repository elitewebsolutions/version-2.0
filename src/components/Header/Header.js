import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";

function Header({ data, page }) {
    const [clicked, setClicked] = useState(false);
    const [scroll, setScroll] = useState(false);

    const onScrollChange = () => {
        if (window.scrollY >= 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    window.addEventListener("scroll", onScrollChange);
    const handleClick = () => {
        setClicked(!clicked);
    };

    // define btn click
    const onClick = () => {
        window.open(page.logoUrl, "_blank");
    };

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
                            <div className="menu-icons" onClick={handleClick}>
                                {clicked ? (
                                    <AiOutlineClose className="mobile-icon" />
                                ) : (
                                    <HiOutlineMenuAlt1 className="mobile-icon" />
                                )}
                            </div>

                            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
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
                                <Button
                                    buttonSize="btn--medium"
                                    btnHeader="header-btn-none"
                                    onClick={onClick}
                                >
                                    Get Website Audit For Free
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
