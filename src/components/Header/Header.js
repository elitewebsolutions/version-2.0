import React from "react";
import "./header.css";
import Web from "./Web";
import Mobile from "./Mobile";

function Header({ toggle, handleClick }) {
  return (
    <>
      <div className="web">
        <Web toggle={toggle} handleClick={handleClick} />
      </div>
      <div className="mobile">
        <Mobile toggle={toggle} handleClick={handleClick} />
      </div>
    </>
  );
}

export default Header;
