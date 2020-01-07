import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Utility from "Common/Utility";

import * as Render from "./SiderItemView+Render";

import { FunctionManager } from "Manager/FunctionManager";

export class SiderItemView extends React.PureComponent<
  Types.SiderItemView.Props,
  Types.SiderItemView.State
> {
  constructor(props: Types.SiderItemView.Props) {
    super(props);
  }
  render() {
    return Render.display(this);
  }
  clicked = () => {
    let switchMain = FunctionManager.shared().switchMain;
    if (switchMain) {
      switchMain(this.props.mode);
    }
  };
}
