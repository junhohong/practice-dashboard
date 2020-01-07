import React from "react";
import * as Styled from "./RootView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import { RootView } from "Root/RootView";
import { LoginView } from "Login/LoginView";
import { Container } from "./RootView+Styled";
import { MainView } from "Main/MainView";

export const display = (obj: RootView) => {
  if (obj.state.loggedIn) {
    return (
      <React.Fragment>
        <Styled.GlobalStyle></Styled.GlobalStyle>
        <MainView></MainView>;
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Styled.GlobalStyle></Styled.GlobalStyle>
        <LoginView></LoginView>;
      </React.Fragment>
    );
  }
};
