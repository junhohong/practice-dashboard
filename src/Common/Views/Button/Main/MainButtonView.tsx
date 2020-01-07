import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Render from "./MainButtonView+Render";
import * as Utility from "Common/Utility";
export class MainButtonView extends React.PureComponent<
  Types.MainButtonView.Props,
  Types.MainButtonView.State
> {
  constructor(props: Types.MainButtonView.Props) {
    super(props);
  }
  render() {
    return Render.display(this);
  }
  onClick = () => {
    this.props.onClick();
  };
  test() {}
}
