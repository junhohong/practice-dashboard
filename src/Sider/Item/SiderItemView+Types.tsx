import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {
  mode: Types.MainView.Mode;
  highlighted: boolean;
  iconSrc: string;
  text: string;
}
export interface State {}

export interface ContainerProps {
  highlighted: boolean;
}
