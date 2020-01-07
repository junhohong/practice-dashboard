import * as Types from "Common/Types";
import * as Models from "Common/Models";

export interface Props {}
export interface State {
  loginButtonLoading: boolean;
  error?: string;
  username: string;
  password: string;
}
