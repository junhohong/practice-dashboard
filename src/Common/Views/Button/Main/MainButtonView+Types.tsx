import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {
  loading: boolean;
  title: string;
  onClick: () => void;
  backgroundColor: string;
  textColor: string;
}

export interface State {}

export interface ContainerProps {
  title: string;
  onClick: () => void;
  backgroundColor: string;
  textColor: string;
  loading: boolean;
}
