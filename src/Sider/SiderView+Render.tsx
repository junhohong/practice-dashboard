import React from "react";
import * as Styled from "./SiderView+Styled";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as CommonViews from "Common/Views";

import { SiderView } from "./SiderView";
import { SiderItemView } from "./Item/SiderItemView";
import logo from "Resources/Images/AppIcon.svg";

export const display = (obj: SiderView) => {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.AppLogo src={logo}></Styled.AppLogo>
        <Styled.TitleLabel>Textlist</Styled.TitleLabel>
      </Styled.TitleContainer>
      <Styled.ItemListContainer>{itemList(obj)}</Styled.ItemListContainer>
    </Styled.Container>
  );
};

const itemList = (obj: SiderView) => {
  let selectedIndex: number;
  switch (obj.props.mode) {
    case Types.MainView.Mode.Home:
      selectedIndex = 0;
      break;
    case Types.MainView.Mode.Messages:
      selectedIndex = 1;
      break;
    case Types.MainView.Mode.Settings:
      selectedIndex = 2;
      break;
  }

  return (
    <Styled.ItemListContainer>
      {obj.state.items.map((item: Models.SiderItem, index: number) => {
        return (
          <SiderItemView
            mode={item.mode}
            highlighted={index === selectedIndex ? true : false}
            iconSrc={
              index === selectedIndex ? item.iconSrc : item.iconUnhighlitedSrc
            }
            text={item.text}
            key={item.id}
          ></SiderItemView>
        );
      })}
    </Styled.ItemListContainer>
  );
};
