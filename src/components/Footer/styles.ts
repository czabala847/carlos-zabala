import styled from "styled-components";
import { COLORS, HEIGHT_SIZE } from "styles/Vars";

export const Footer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  text-align: center;
  height: ${HEIGHT_SIZE.FOOTER};
  box-sizing: border-box;
`;

export const FooterIcon = styled.a`
  height: 80px;
  width: 80px;
  font-size: 3rem;
  color: ${COLORS.WHITE};
`;
