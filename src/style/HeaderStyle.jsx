import styled from "styled-components";
import BGImage from "../assets/images/pattern-bg.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BGImage});
  background-size: cover;

  @media (max-width: 920px) {
    height: 30%;
  }
`;

export const Title = styled.h1`
  width: auto;
  height: auto;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: white;
  padding: 5px;
  margin: 20px;

  @media (max-width: 920px) {
    top: 0px;
    font-size: 1.5rem;
  }
`;
