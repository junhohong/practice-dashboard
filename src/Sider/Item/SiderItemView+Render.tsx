import React from "react";
import * as Styled from "./SiderItemView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { SiderItemView } from "./SiderItemView";

export const display = (obj: SiderItemView) => {
  return (
    <Styled.Container onClick={obj.clicked}>
      <Styled.Icon src={obj.props.iconSrc}></Styled.Icon>
      <Styled.Label highlighted={obj.props.highlighted}>
        {obj.props.text}
      </Styled.Label>
    </Styled.Container>
  );
};
