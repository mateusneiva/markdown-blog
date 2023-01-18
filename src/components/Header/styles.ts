import styled from "styled-components";
import NextLink from "next/link";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 450px;

  @media only screen and (max-width: 768px) {
    height: 350px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 55px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconLink = styled(NextLink)`
  display: flex;
  justify-content: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.65;
    }

    p {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin-inline: 18px;
  transition: 0.5s ease;
  border-radius: 3px;
`;

export const HoverText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -40px;
  padding: 0px 8px;
  
  font-size: 10px;
  text-transform: uppercase;
  border-radius: 20px;
  
  color: #ffffff;
  background: ${(props) => props.color};
  
  transition: 0.2s;
  visibility: hidden;
  opacity: 0;
`;
