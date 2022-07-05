import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@images/logo_white.png";

import {
  Header as HeaderMain,
  HeaderContainer,
  Logo,
  Menu,
  MenuIcon,
  MenuNav,
} from "./styles";
import { Container } from "styles/utils/Containers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <HeaderMain>
      <Container>
        <HeaderContainer>
          <Logo>
            <Image src={logo} alt="Logo Carlos Zabala" />
          </Logo>

          <Menu>
            <MenuIcon onClick={handleShowMenu}>
              <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </MenuIcon>

            {showMenu && (
              <MenuNav>
                <ul>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faUser} /> <span>Acerca de</span>
                    </a>
                  </li>
                </ul>
              </MenuNav>
            )}
          </Menu>
        </HeaderContainer>
      </Container>
    </HeaderMain>
  );
};

export { Header };
