import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Utility from "Common/Utility";

import * as Render from "./SiderView+Render";

import { FunctionManager } from "Manager/FunctionManager";
import logo from "Resources/Images/AppIcon.svg";
import unhighlightedLogo from "Resources/Images/UnhighlightedAppIcon.svg";
import highlightedHome from "Resources/Images/HighlightedHome.svg";
import unhighlightedHome from "Resources/Images/UnhighlightedHome.svg";

export class SiderView extends React.PureComponent<
  Types.SiderView.Props,
  Types.SiderView.State
> {
  constructor(props: Types.SiderView.Props) {
    super(props);
    let index: number;
    switch (props.mode) {
      case Types.MainView.Mode.Home:
        console.log("matched home");
        index = 0;
        break;
      case Types.MainView.Mode.Messages:
        console.log("matched messages");
        index = 1;
        break;
      case Types.MainView.Mode.Settings:
        console.log("matched settings");
        index = 2;
        break;
    }
    this.state = {
      items: [
        {
          id: "1",
          text: "Home",
          iconSrc: highlightedHome,
          iconUnhighlitedSrc: unhighlightedHome,
          mode: Types.MainView.Mode.Home
        },
        {
          id: "2",
          text: "Messages",
          iconSrc: logo,
          iconUnhighlitedSrc: unhighlightedLogo,
          mode: Types.MainView.Mode.Messages
        },
        {
          id: "3",
          text: "Settings",
          iconSrc: logo,
          iconUnhighlitedSrc: unhighlightedLogo,
          mode: Types.MainView.Mode.Settings
        }
      ]
    };
  }
  render() {
    return Render.display(this);
  }
}
