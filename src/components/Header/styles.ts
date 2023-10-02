import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 350px;

  @media only screen and (max-width: 768px) {
    height: 350px;
  }
`;
