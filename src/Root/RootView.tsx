import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Render from "./RootView+Render";
import { FunctionManager } from "Manager/FunctionManager";

export class RootView extends React.PureComponent<
  Types.RootView.Props,
  Types.RootView.State
> {
  constructor(props: Types.RootView.Props) {
    super(props);
    this.state = {
      loggedIn: false
      // loggedIn: true
    };
    FunctionManager.shared().setLoggedIn = this.setLoggedIn;
  }
  render() {
    return Render.display(this);
  }

  setLoggedIn = (loggedIn: boolean) => {
    this.setState({
      loggedIn: loggedIn
    });
  };
}
