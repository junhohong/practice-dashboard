import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 46px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);
`;

export const TitleLabel = styled.h1`
  font-size: 20px;
  margin-left: 35px;
  color: #29365e;
`;
