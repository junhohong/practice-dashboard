import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export const Label = styled.p`
  font-size: 13px;
  width: 70px;
  margin-left: 17px;
  color: #3345a1;
  font-weight: ${(p: Types.SiderItemView.ContainerProps) =>
    p.highlighted ? "700" : "400"};
  color: ${(p: Types.SiderItemView.ContainerProps) =>
    p.highlighted ? "#3345a1" : "#9B9B9B"};
`;
