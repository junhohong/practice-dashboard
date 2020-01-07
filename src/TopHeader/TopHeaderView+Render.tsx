import React from "react";
import * as Styled from "./TopHeaderView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { TopHeaderView } from "./TopHeaderView";
import { TopHeaderProfileView } from "./Profile/TopHeaderProfileView";
export const display = (obj: TopHeaderView) => {
  return (
    <Styled.Container>
      <Styled.TitleLabel>{obj.titleText()}</Styled.TitleLabel>
      <TopHeaderProfileView></TopHeaderProfileView>
    </Styled.Container>
  );
};
