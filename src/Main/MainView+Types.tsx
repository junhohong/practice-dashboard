import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {}
export interface State {
  mode: Types.MainView.Mode;
}

export enum Mode {
  Home,
  Messages,
  Settings
}
