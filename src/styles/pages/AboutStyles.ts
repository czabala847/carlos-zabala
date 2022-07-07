import styled from "styled-components";
import Image from "next/image";
import { COLORS, HEIGHT_SIZE, BACKGROUND } from "@styles/Vars";
import { ButtonContainer as Buttons } from "@styles/utils/Buttons";
import { fadeIn, scaleInCenter } from "@styles/utils/Animations";

export const About = styled.section`
  color: ${COLORS.WHITE};
  min-height: calc(100vh - 230px);
  padding-top: ${HEIGHT_SIZE.HEADER};
  background: ${BACKGROUND.MAIN};
  position: relative;

  h2 {
    font-size: 2.5rem;
  }
`;

export const AboutHero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem 0 3rem;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 3px solid ${COLORS.WHITE};
  overflow: hidden;
  margin: 0 auto;
  ${scaleInCenter()}
`;

export const ImageProfile = styled(Image)`
  object-fit: cover;
  /* border-radius: 50%; */
`;

export const AboutMe = styled.div`
  position: relative;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  /* padding: 3rem 0; */
  margin: 3rem 0;
`;

export const ButtonContainer = styled(Buttons)`
  justify-content: center;
  margin-top: 2rem;
  ${scaleInCenter()}
`;

export const DividerWaves = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
  }

  & path {
    fill: ${COLORS.WHITE};
  }
`;
