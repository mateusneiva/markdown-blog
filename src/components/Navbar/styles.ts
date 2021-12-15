import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 450px;

  @media only screen and (max-width: 768px) {
    height: 350px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled.a`
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

export const Image = styled.img`
  width: 45px;
  height: 45px;
  margin-inline: 18px;
  transition: 0.5s ease;
  border-radius: 3px;
`;

export const Description = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -40px;
  font-size: 10px;
  text-transform: uppercase;
  padding: 0px 8px;
  border-radius: 20px;
  background: ${(props) => props.color};
  color: #ffffff;
  opacity: 0;
  transition: 0.2s;
`;
