import styled, { css } from "styled-components";
import Image from "next/image";
import { COLORS, BACKGROUND } from "styles/Vars";
import { fadeIn } from "@styles/utils/Animations";

export const Project = styled.div`
  display: grid;
  grid-template-columns: 45% 1fr;
  grid-template-rows: 280px;
  grid-template-areas: "content image";
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${COLORS.PURPLE};
  background: ${BACKGROUND.RADIAL};
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 1rem 0;
  /* transition: 0.3s; */
  column-gap: 1rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
      "image"
      "content";
  }

  /* &:hover {
    transform: scale(1.03);
  } */
`;

export const ProjectContent = styled.div`
  grid-area: content;
  padding: 2rem 0 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  transition: 0.3s;
  ${fadeIn()}

  & h4 {
    font-size: 1.5rem;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PillContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
`;

interface PillVariantOptions {
  backgroundColor: string;
  color: string;
}

interface PillVariantsInterface {
  [P: string]: PillVariantOptions;
}

const PillVariants: PillVariantsInterface = {
  reactjs: {
    backgroundColor: COLORS.SKY_BLUE,
    color: COLORS.BLACK,
  },
  javascript: {
    backgroundColor: COLORS.ORANGE,
    color: COLORS.BLACK,
  },
  sass: {
    backgroundColor: COLORS.PINK,
    color: COLORS.WHITE,
  },
  reactapollo: {
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
  },
  styledcomponents: {
    backgroundColor: COLORS.PINK,
    color: COLORS.WHITE,
  },
  next: {
    backgroundColor: COLORS.BLACK,
    color: COLORS.WHITE,
  },
  angular: {
    backgroundColor: COLORS.RED,
    color: COLORS.WHITE,
  },
  typescript: {
    backgroundColor: COLORS.BLUE,
    color: COLORS.WHITE,
  },
};

export const Pill = styled.span<{ type: string }>`
  font-size: 0.8rem;
  padding: 0rem 0.5rem;
  border-radius: 5px;

  ${({ type }) => {
    type = type.toLocaleLowerCase().replace(/ /g, "");

    if (type && PillVariants[type]) {
      return css`
        background-color: ${PillVariants[type].backgroundColor};
        color: ${PillVariants[type].color};
      `;
    }
  }};
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: image;
  position: relative;
`;

export const ProjectImage = styled(Image)`
  object-fit: cover;
`;
