import React from "react";
import "./Header.scss";
import Title from "../Typography/Title/Title";

const Header = ()=>{
    return(
        <header className="header__wrapper">
          <div className="header__wrapper-title">
              <Title>Doodle Chat</Title>
          </div>
        </header>
    );
};

export default Header;
