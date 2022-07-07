import { css, keyframes } from "styled-components";

const scaleInCenterFrame = keyframes`
     0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const scaleInCenter = () => {
  return css`
    animation: ${scaleInCenterFrame} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  `;
};

const fadeInFrame = keyframes`
    from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

export const fadeIn = () => {
  return css`
    animation: ${fadeInFrame} 1s ease;
  `;
};
