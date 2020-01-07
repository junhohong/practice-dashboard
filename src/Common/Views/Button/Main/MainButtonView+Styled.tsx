import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(p: Types.MainButtonView.ContainerProps) =>
    p.loading ? "none" : "auto"};
  background-color: ${(p: Types.MainButtonView.ContainerProps) =>
    p.backgroundColor};
  color: ${(p: Types.MainButtonView.ContainerProps) => p.textColor};
  text-align: center;
  border-style: solid;
  border-radius: 8px;
  border-color: white;
  border-width: 2px;
  width: 100%;
  height: 48px;
  max-width: 250px;
  transition-duration: 0.2s;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const Label = styled.p`
  color: white;
  cursor: pointer;
  font-weight: 700;
`;

export const AnimationContainer = styled.div``;
