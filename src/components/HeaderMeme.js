import React from "react";
import LogoHeader from "../images/Troll-Face.png";

export default function HeaderMeme() {
  return (
    <header className="header">
      <img 
      src={LogoHeader}
      className='header-image'
      />
      <h2 className="header-title"> Meme Generator </h2>
      <h4 className="header-project">React Course - Project 3</h4>
    </header>
  );
}
