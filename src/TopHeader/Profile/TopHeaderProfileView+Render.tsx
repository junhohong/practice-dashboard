import React from "react";
import * as Styled from "./TopHeaderProfileView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { TopHeaderProfileView } from "./TopHeaderProfileView";

export const display = (obj: TopHeaderProfileView) => {
  return (
    <Styled.Container>
      <Styled.AvatarContainer>
        <Styled.AvatarLabel>JH</Styled.AvatarLabel>
      </Styled.AvatarContainer>
      <Styled.NameLabel>Jun Hong</Styled.NameLabel>
    </Styled.Container>
  );
};
