import React from "react";
import * as Types from "Common/Types";
import * as Models from "Common/Models";
import * as Render from "./LoginView+Render";
import { FunctionManager } from "Manager/FunctionManager";
import * as Utility from "Common/Utility";

export class LoginView extends React.PureComponent<
  Types.LoginView.Props,
  Types.LoginView.State
> {
  constructor(props: Types.LoginView.Props) {
    super(props);
    this.state = {
      loginButtonLoading: false,
      error: undefined,
      username: "",
      password: ""
    };
  }
  render() {
    return Render.display(this);
  }
  onUsernameInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    const value = target.value;
    this.setState({ username: value });
  };
  onPasswordInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    const value = target.value;
    this.setState({ password: value });
  };
  onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      this.onSubmit();
    }
  };

  validatedFields = () => {
    if (!this.state.username) {
      this.setState({
        error: "Please enter your username."
      });
      return false;
    }
    if (!this.state.password) {
      this.setState({
        error: "Please enter your password."
      });
      return false;
    }
    return true;
  };
  onSubmit = () => {
    if (!this.validatedFields()) {
      return;
    }
    this.setState({
      loginButtonLoading: true
    });
    Utility.sleep(1000).then(() => {
      this.setState({
        loginButtonLoading: false
      });
      if (this.state.username === "jun") {
        const loggedIn = FunctionManager.shared().setLoggedIn;
        if (loggedIn) {
          loggedIn(true);
        }
      } else {
        this.setState({
          error: "Login failed. Please try again."
        });
      }
    });
  };
}
