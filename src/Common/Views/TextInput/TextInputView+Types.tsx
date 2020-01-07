import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {
  id: string;
  title: string;
  placeholder: string;
  type: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  locked: boolean;
}
export interface State {
  focused: boolean;
  value: string;
  error: string;
}
