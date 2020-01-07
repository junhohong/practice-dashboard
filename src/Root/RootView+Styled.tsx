import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat';
  }
`;

export const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;
