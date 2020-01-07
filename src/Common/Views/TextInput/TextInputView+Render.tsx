import React from "react";
import * as Styled from "./TextInputView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import { TextInputView } from "./TextInputView";
export const display = (obj: TextInputView) => {
  return (
    <Styled.Container>
      {titleView(obj)}
      <Styled.InputContainer>
        <Styled.Input {...obj.props} />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

const titleView = (obj: TextInputView) => {
  let view = null;
  if (obj.props.title) {
    view = <Styled.Title>{obj.props.title}</Styled.Title>;
  }
  return view;
};
