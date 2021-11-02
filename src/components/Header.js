import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
  faCogs,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../styles/components/Header.scss";

function Header() {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="Header container">
      <div className="Header_container">
        <figure className="Logo">Logo</figure>

        <div className="Header_icon" onClick={handleShowMenu}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>
        {showMenu && (
          <nav className="Header_menu">
            <ul>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faUser} /> <span>Acerca de</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faCogs} /> <span>Habilidades</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faFolderOpen} />
                  <span>Portafolio</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export { Header };
