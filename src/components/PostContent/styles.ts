import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 750px;
  margin-bottom: 13px;

  font-size: 13px;
  font-weight: 500;
`;

export const Time = styled.div`
  display: flex;
  gap: 10px;

  font-size: 14px;
  font-weight: 400;
  color: #555565;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1em;

  width: fit-content;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #555565;
`;

export const Content = styled.div`
  width: 750px;
  font-size: 17px;
  line-height: 1.6em;
  letter-spacing: 0.3px;
  margin-top: 20px;
  margin-bottom: 100px;

  h2 {
    font-family: "Poppins", sans-serif;
    line-height: 1.1em;
    font-size: 32px;
    font-weight: 700;

    width: fit-content;
    padding-top: 25px;
  }

  p {
    margin: 25px 0;
  }
`;
