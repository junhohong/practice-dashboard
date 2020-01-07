import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {
  mode: Types.MainView.Mode;
}
export interface State {
  items: Models.SiderItem[];
}
