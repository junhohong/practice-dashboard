import * as Types from "Common/Types";
import * as Models from "Common/Models";
import styled, { StyledComponent } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: #6d7e8f;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
`;

export const Input = styled.input`
  background-color: white;
  text-align: center;
  border: none;
  font-size: 15px;
  font-weight: 400;
  font-family: "helvetica";
  line-height: normal;
  outline: none;
  width: 95%;
  ::placeholder {
    color: #b9b6b6;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: white;
  border-color: #b9b6b6;
  border-width: 1px;
  border-style: solid;
  transition: 0.1s all;

  &:hover {
    border-color: #3345a1;
    border-width: 1px;
  }

  ${Input}:focus & {
    border-color: #3345a1;
    border-width: 1px;
  }
`;
