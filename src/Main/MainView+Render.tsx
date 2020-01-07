import React from "react";
import * as Styled from "./MainView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { MainView } from "./MainView";
import { SiderView } from "Sider/SiderView";
import { TopHeaderView } from "TopHeader/TopHeaderView";
export const display = (obj: MainView) => {
  return (
    <Styled.Container>
      <SiderView mode={obj.state.mode}></SiderView>
      <Styled.RightContainer>
        <TopHeaderView mode={obj.state.mode}></TopHeaderView>
      </Styled.RightContainer>
    </Styled.Container>
  );
};
