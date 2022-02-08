import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../styles/components/Header.scss";
import logo from "../assets/img/logo_white.png";

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const refHeader = React.useRef(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <header
      className={offset > 0 ? "Header bg-black" : "Header"}
      ref={refHeader}
    >
      <div className="container">
        <div className="Header_container">
          <figure className="Logo">
            <img src={logo} alt="Logo Carlos Zabala" />
          </figure>

          <div className="Menu">
            <div className="Menu_icon box-shadow" onClick={handleShowMenu}>
              <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </div>

            {showMenu && (
              <nav className="Menu_nav box-shadow">
                <ul>
                  <li>
                    <Link to="/">
                      <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <FontAwesomeIcon icon={faUser} /> <span>Acerca de</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
