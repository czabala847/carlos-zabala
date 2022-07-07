import React, { useState, useRef, useEffect } from "react";
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
  const [offset, setOffset] = React.useState<number>(0);

  const handleShowMenu = (): void => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <HeaderMain dark={offset > 0}>
      <Container>
        <HeaderContainer>
          <Logo>
            <Link href="/" passHref>
              <a href="replace">
                <Image src={logo} alt="Logo Carlos Zabala" />
              </a>
            </Link>
          </Logo>

          <Menu>
            <MenuIcon onClick={handleShowMenu}>
              <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
            </MenuIcon>

            {showMenu && (
              <MenuNav>
                <ul>
                  <li>
                    <Link href="/">
                      <a>
                        <FontAwesomeIcon icon={faHome} /> <span>Inicio</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>
                        <FontAwesomeIcon icon={faUser} /> <span>Acerca de</span>
                      </a>
                    </Link>
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
