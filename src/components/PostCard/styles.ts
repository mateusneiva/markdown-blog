import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 382px;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 382px;
  height: 270px;
  object-fit: cover;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.06);
  }
`;

export const ImageHoverZoom = styled.a`
  width: 382px;
  height: 270px;
  overflow: hidden;
`;

export const Title = styled.a`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  width: fit-content;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 13px;
  font-weight: 500;
  color: #636363;
  margin-top: 13px;
  margin-bottom: 13px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;

  time,
  p {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 7px;
  }
`;

export const Tag = styled.a`
  font-size: 10px;
  padding: 0px 8px;
  border-radius: 20px;
  color: #fff;
  text-transform: uppercase;
  background: ${(props) => props.color};
`;
