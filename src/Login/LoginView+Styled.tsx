import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: #ffe;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  flex: 2;
  width: 80%;
  height: 100%;
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: dotted;
  border-width: 0px;
  border-color: black;
  margin: 0px 0px 20px 0px;
`;

export const LeftContentTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AppLogo = styled.img``;

export const AppLogoTitle = styled.h1`
  color: #3345a1;
  margin-left: 20px;
`;

export const PageTitle = styled.h1`
  color: #2f3856;
  text-align: center;
`;

export const Margin = styled.div`
  height: 20px;
`;

export const ForgotPassword = styled.p`
  color: #a1a0a0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  margin: 40px 0px 40px 0px;
`;

export const ErrorView = styled.p`
  color: red;
  font-size: 14px;
`;

export const RightContainer = styled.div`
  background-color: #3345a1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const RightContentContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;

export const RightContentTitle = styled.h1`
  flex-direction: row;
  color: #f8f9fb;
  margin: 40px;
`;

export const RightContentSubtitle1 = styled.p`
  flex-direction: row;
  text-align: center;
  color: #f7f9fc;
  margin: auto;
`;

export const RightContentSubtitle2 = styled.p`
  flex-direction: row;
  color: #f7f9fc;
  text-align: center;
  margin-bottom: 40px;
`;
