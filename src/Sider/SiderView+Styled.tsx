import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  /* border-right: 1px solid #dbdfe9; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 200px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AppLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const TitleLabel = styled.h1`
  color: #3345a1;
  font-size: 20px;
  margin-left: 10px;
`;

export const ItemListContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
