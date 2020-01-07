import React from "react"; 
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Utility from "Common/Utility";

import * as Render from "./TopHeaderProfileView+Render";

import { FunctionManager } from "Manager/FunctionManager";

export class TopHeaderProfileView extends React.PureComponent<
  Types.TopHeaderProfileView.Props,
  Types.TopHeaderProfileView.State
> {
  constructor(props: Types.TopHeaderProfileView.Props) {
    super(props);
  }
  render() {
    return Render.display(this);
  }
}
