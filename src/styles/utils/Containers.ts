import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;
  transition: 0.3s;
  height: 100%;

  @media only screen and (max-width: 1023px) {
    grid-template-columns: minmax(auto, 768px);
    padding: 0 2rem;
  }
`;
