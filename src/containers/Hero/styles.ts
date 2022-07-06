import styled, { css } from "styled-components";
import Image from "next/image";
import { COLORS, INDEX } from "styles/Vars";

export const HeroContainer = styled.div`
  min-height: 100vh;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  z-index: ${INDEX.HERO};
  transition: 0.3s;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: ${INDEX.HERO};

  & li {
    margin: 0;
    display: inline-block;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

  & li:nth-child(2) {
    margin-left: 3rem;
  }
`;

export const HeroImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
