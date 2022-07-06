import styled, { css } from "styled-components";
import { COLORS } from "styles/Vars";

const variantOptions = {
  primary: {
    backgroundColor: COLORS.DARK_BLUE,
    color: COLORS.WHITE,
  },
  light: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
  },
};

const ButtonBase = css<{ variant: string }>`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  ${({ variant }) =>
    variant &&
    variantOptions[variant] &&
    css`
      background-color: ${variantOptions[variant].backgroundColor};
      color: ${variantOptions[variant].color};
    `}

  &:hover {
    transform: scale(1.05);
  }
`;

export const ButtonA = styled.a`
  ${ButtonBase}
`;

export const Button = styled.button`
  ${ButtonBase}
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  & > * {
    margin-right: 0.5rem;
  }
`;
