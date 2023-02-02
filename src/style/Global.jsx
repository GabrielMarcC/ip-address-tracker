import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Rubik", sans-serif;
}
`;

export const Screen = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
