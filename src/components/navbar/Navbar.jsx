import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={require("../../media/logoVector.jpg")} alt="" />
      </div>
      <div className="right">
        <span>Úvod</span>
        <span>Kdo jsem</span>
        <span>Služby</span>
        <span>Galerie</span>
        <span>Kontakt</span>
      </div>
    </div>
  );
};
