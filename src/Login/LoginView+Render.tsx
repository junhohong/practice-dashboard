import React from "react";
import * as Styled from "./LoginView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { LoginView } from "./LoginView";

import { TextInputView } from "Common/Views/TextInput/TextInputView";

import logo from "Resources/Images/AppIcon.svg";
export const display = (obj: LoginView) => {
  return (
    <Styled.Container>
      <Styled.LeftContainer>
        <Styled.LeftContentContainer>
          <Styled.LeftContentTitleContainer>
            <Styled.AppLogo src={logo}></Styled.AppLogo>
            <Styled.AppLogoTitle>Textlist</Styled.AppLogoTitle>
          </Styled.LeftContentTitleContainer>
          <Styled.PageTitle>Marketing Dashboard</Styled.PageTitle>
          <CommonViews.TextInputView
            id={"username"}
            title={"Username"}
            placeholder={"Enter your username"}
            type={"text"}
            locked={false}
            onChange={obj.onUsernameInputChange}
            onKeyPress={obj.onInputKeyPress}
          ></CommonViews.TextInputView>
          <Styled.Margin></Styled.Margin>
          <TextInputView
            id={"password"}
            title={"Password"}
            placeholder={"Enter your password"}
            type={"password"}
            locked={false}
            onChange={obj.onPasswordInputChange}
            onKeyPress={obj.onInputKeyPress}
          ></TextInputView>
          <Styled.ForgotPassword>Forgot Password?</Styled.ForgotPassword>
          <CommonViews.MainButtonView
            loading={obj.state.loginButtonLoading}
            title={"LOGIN"}
            backgroundColor={"#3345A1"}
            textColor={"white"}
            onClick={obj.onSubmit}
          />
          {errorView(obj)}
        </Styled.LeftContentContainer>
      </Styled.LeftContainer>
      <Styled.RightContainer>
        <Styled.RightContentContainer>
          <Styled.RightContentTitle>Hello!</Styled.RightContentTitle>
          <Styled.RightContentSubtitle1>
            Welcome to Textlist marketing dashboard for retailers.
          </Styled.RightContentSubtitle1>
          <Styled.RightContentSubtitle2>
            Activate your account to access your dashboard.
          </Styled.RightContentSubtitle2>
          <CommonViews.MainButtonView
            loading={false}
            title={"REGISTER"}
            onClick={() => {}}
            backgroundColor={"#3345A1"}
            textColor={"white"}
          ></CommonViews.MainButtonView>
        </Styled.RightContentContainer>
      </Styled.RightContainer>
    </Styled.Container>
  );
};

const errorView = (obj: LoginView) => {
  if (obj.state.error) {
    return <Styled.ErrorView>{obj.state.error}</Styled.ErrorView>;
  } else {
    return null;
  }
};
