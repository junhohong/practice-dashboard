import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Utility from "Common/Utility";

import * as Render from "./TopHeaderView+Render";

import { FunctionManager } from "Manager/FunctionManager";

export class TopHeaderView extends React.PureComponent<
  Types.TopHeaderView.Props,
  Types.TopHeaderView.State
> {
  constructor(props: Types.TopHeaderView.Props) {
    super(props);
  }
  render() {
    return Render.display(this);
  }

  titleText = () => {
    switch (this.props.mode) {
      case Types.MainView.Mode.Home:
        return "Home";
      case Types.MainView.Mode.Messages:
        return "Messages";
      case Types.MainView.Mode.Settings:
        return "Settings";
    }
  };
}
