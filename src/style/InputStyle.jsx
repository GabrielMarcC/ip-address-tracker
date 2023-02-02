import styled from "styled-components";

export const InputContainer = styled.div`
  min-width: 50%;
  max-width: 100%;
  min-height: 10%;
  max-height: 20%;
  width: 570px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputStyle = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 70%;
  min-width: 50%;
  min-height: 20%;
  max-height: 130%;
  width: 500px;
  height: 60px;
  border-radius: 12px;
  padding: 10px;
  font-size: 1.8rem;
  border: none;
  margin: 20px;
  @media (max-width: 902) {
    max-width: 50%;
    min-width: 40%;
    min-height: 21%;
    max-height: 90%;
  }

  @media (max-width: 740px) {
    font-size: 1.5rem;
    max-height: 90%;
  }

  @media (max-width: 550px) {
    max-width: 50%;
    font-size: 1.3rem;
  }

  @media (max-width: 460px) {
    max-width: 40%;
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.6rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 4%;
  height: 55px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
  right: 34px;
  background: black;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 920px) {
    width: 30px;
    height: 54px;
  }

  @media (max-width: 740px) {
    height: 20px;
    border-radius: 8px;
  }

  @media (max-width: 460px) {
    width: 25px;
  }

  @media (max-width: 320px) {
    width: 25px;
    min-height: 37px;
  }
`;

export const HelperText = styled.div`
  width: 128px;
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  justify-content: center;
  color: #f1cb0c;
  margin: 10px 0px;
`;
