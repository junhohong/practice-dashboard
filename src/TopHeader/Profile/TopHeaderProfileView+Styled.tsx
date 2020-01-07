import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: blue;
  width: 30px;
  height: 30px;
`;

export const AvatarLabel = styled.p`
  color: white;
  font-weight: 600;
  font-size: 12px;
`;

export const NameLabel = styled.p`
  margin-left: 10px;
  font-size: 13px;
`;
