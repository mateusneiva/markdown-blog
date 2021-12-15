import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  width: 1120px;
  font-weight: 500;
  margin-bottom: 13px;
  padding-left: 20px;
  padding-right: 20px;

  time,
  p {
    display: flex;
    align-items: center;
    color: #636363;
  }

  svg {
    margin-right: 7px;
    color: #636363;
  }
`;

export const Tag = styled.a`
  font-size: 11.2px;
  padding: 2px 10px;
  border-radius: 20px;
  color: #fff;
  text-transform: uppercase;
  background: ${(props) => props.color};
`;

export const Title = styled.h2`
  font-family: Poppins;
  line-height: 1.1em;
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 25px;
  width: fit-content;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 445px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 750px;
  font-size: 20px;
  line-height: 1.6em;
  letter-spacing: 0.3px;
  margin-top: 20px;
  margin-bottom: 100px;

  h2 {
    font-family: Poppins;
    line-height: 1.1em;
    font-size: 40px;
    font-weight: 700;
    padding-top: 25px;
    width: fit-content;
  }

  p {
    margin: 25px 0;
  }
`;

export const PostWrapper = styled.div`
  width: 650px;
  margin-bottom: 20px;
  padding: 15px;
  margin-top: 100px;
`;

export const Image = styled.img`
  width: 660px;
  height: 425px;
  margin-right: 25px;
  border-radius: 5px;
  object-fit: cover;
  transition: 0.5s ease;
`;
