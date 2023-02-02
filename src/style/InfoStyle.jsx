import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const InfoContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  min-width: 60%;
  height: auto;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  z-index: 1000;
  top: 20%;
  padding: 48px 0px;
  margin: 30px 0;

  @media (max-width: 1350px) {
    min-width: 80%;
    top: 150px;
  }

  @media (max-width: 998px) {
    min-width: 30%;
    min-height: 40%;
    flex-direction: column;
  }

  @media (max-width: 920px) {
    min-width: 30%;
    min-height: 20%;
    top: 146px;
  }

  @media (max-width: 850px) {
    max-width: 80%;
    min-width: 45%;
    min-height: 35%;
    flex-direction: column;
    max-height: 60%;
    height: 260px;
    border: none;
    align-self: center;
  }

  @media (max-width: 825px) {
    min-width: 35%;
    min-height: 25%;
    padding: 20px;
    top: 140px;
  }

  @media (max-width: 800px) {
    max-width: 80%;
    min-width: 40%;
    min-height: 30%;
    top: 140px;
  }

  @media (max-width: 460px) {
    max-width: 80%;
    min-width: 60%;
    min-height: 30%;
  }
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 40%;
  min-width: 18%;
  max-height: 70px;
  min-height: 40px;
  margin: 0px 26px;
  border-right: 1px solid hsl(0, 0%, 59%);
  font: normal normal bolder 3rem "Rubik", sans-serif;

  @media (max-width: 998px) {
    border: none;
    align-items: center;
  }
  @media (max-width: 910px) {
    min-width: 50%;
    max-width: 60%;
    min-height: 20%;
    max-height: 40%;
    border: none;
    align-self: center;
    font-size: 2rem;
  }
`;

export const LastDetail = styled(InfoDetails)`
  border: none;
`;

export const TitleContent = styled.div`
  color: hsl(0, 0%, 59%);
  margin: 20px 0px;

  @media (max-width: 998px) {
    font-size: 1.5rem;
  }

  @media (max-width: 850px) and (min-width: 200px) {
    align-self: center;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
    align-self: center;
  }
`;

export const InfoContent = styled.div`
  color: black;
  justify-content: center;

  @media (max-width: 998px) {
    font-size: 1.3rem;
    align-self: center;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
    align-self: center;
  }

  @media (max-width: 450px) and (max-height: 400px) {
    font-size: 1rem;
    align-self: center;
  }
`;
