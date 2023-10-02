import styled from "styled-components";
import NextLink from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 700px;
`;

export const Title = styled(NextLink)`
  font-family: "Poppins", sans-serif;
  font-size: 23px;
  font-weight: 700;

  color: initial;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #555565;
`;

export const Time = styled.div`
  display: flex;
  gap: 10px;

  font-size: 14px;
  font-weight: 400;
  color: #555565;
`;
