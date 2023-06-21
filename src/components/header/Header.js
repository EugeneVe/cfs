import React, { useRef, useContext } from "react";
import { ThemeContext } from "contexts/ThemeContext";
import Links from "../links/Links";
import { ReactComponent as LogoIcon } from "assets/icons/LogoFooter.svg";
import "./Header.scss";

const Header = () => {
  const [themeSwith] = useContext(ThemeContext);
  const headerWrapper = useRef(null);
  const header = useRef(null);
  onscroll = function changeHeaderColor() {
    window.scrollY >= 50
      ? headerWrapper.current?.classList.add("active")
      : headerWrapper.current?.classList.remove("active");
    window.scrollY >= 50 ? header.current?.classList.add("active") : header.current?.classList.remove("active");
  };

  return (
    <div className="header-wrapper" ref={headerWrapper}>
      <div className="header-content-wrapper">
        <a href="/">
          <div className="logo">
            {!themeSwith ? (
              <LogoIcon style={{ fill: "rgba(248, 249, 249, 1)" }} />
            ) : (
              <LogoIcon style={{ fill: "rgba(45, 45, 45, 1)" }} />
            )}
          </div>
        </a>
        <div className="links-buttons">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Header;
