import React from "react";
import Icon1 from "../assets/nav-icon1.svg";
import Icon2 from "../assets/nav-icon2.svg";
import Icon3 from "../assets/nav-icon3.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yosef-haimjan/" target='_blank'><img src={Icon1} alt="Linkedin" /></a>
        <a href="https://www.facebook.com/yosef.haimjan" target='_blank'><img src={Icon2} alt="" /></a>
         <a href="https://www.instagram.com/yosef_10_/" target='_blank'><img src={Icon3} alt="" /></a>
      </div>
      @ By Yosef Haimjan
    </div>
  );
}
