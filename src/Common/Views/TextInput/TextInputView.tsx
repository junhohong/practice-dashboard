import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Render from "./TextInputView+Render";

export class TextInputView extends React.PureComponent<
  Types.TextInputView.Props,
  Types.TextInputView.State
> {
  constructor(props: Types.TextInputView.Props) {
    super(props);
    this.state = {
      focused: false,
      value: "",
      error: ""
    };
  }
  render() {
    return Render.display(this);
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    let thisScope = this;
    let target = e.target as HTMLInputElement;
    const value = target.value;
    thisScope.setState({ value: value });
    thisScope.props.onChange(e);
  };

  onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    this.props.onKeyPress(e);
  };
}
