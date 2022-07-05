import styled from "styled-components";

import { COLORS, HEIGHT_SIZE, INDEX, boxShadow } from "styles/Vars";

export const Header = styled.header`
  color: ${COLORS.WHITE};
  width: 100%;
  height: ${HEIGHT_SIZE.HEADER};
  position: fixed;
  z-index: ${INDEX.HEADER};
  box-sizing: border-box;
  transition: 0.3s;
  top: 0;
  background: ${(props) => (props.dark ? "#000000" : "transparent")};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.figure`
  margin: 0;

  & img {
    height: 70px;
  }
`;

export const Menu = styled.div`
  position: relative;
`;

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  box-shadow: ${boxShadow};

  &:hover {
    transform: scale(0.9);
  }
`;

export const MenuNav = styled.nav`
  position: absolute;
  right: 10px;
  top: ${HEIGHT_SIZE.HEADER};
  background-color: ${COLORS.WHITE};
  padding: 0 1rem;
  border-radius: 10px;
  box-sizing: border-box;
  min-width: 250px;
  box-shadow: ${boxShadow};

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    margin: 0;
  }

  & a {
    padding: 0.5rem;
    border-radius: 10px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
    display: grid;
    grid-template-columns: 20% 1fr;
    align-items: center;
    transition: 0.3s;
  }

  & a:hover {
    background-color: ${COLORS.PURPLE};
    color: ${COLORS.WHITE};
    cursor: pointer;
  }
`;
