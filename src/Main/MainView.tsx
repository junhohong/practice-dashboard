import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Utility from "Common/Utility";

import * as Render from "./MainView+Render";

import { FunctionManager } from "Manager/FunctionManager";

export class MainView extends React.PureComponent<
  Types.MainView.Props,
  Types.MainView.State
> {
  constructor(props: Types.MainView.Props) {
    super(props);
    this.state = {
      mode: Types.MainView.Mode.Home
    };
    FunctionManager.shared().switchMain = this.switchMain;
  }
  render() {
    return Render.display(this);
  }
  switchMain = (mode: Types.MainView.Mode) => {
    this.setState({
      mode: mode
    });
  };
}
