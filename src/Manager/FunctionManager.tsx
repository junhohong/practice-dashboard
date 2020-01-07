import * as Types from "Common/Types";

export class FunctionManager {
  static instance: FunctionManager;

  static shared() {
    if (!FunctionManager.instance) {
      FunctionManager.instance = new FunctionManager();
    }
    return this.instance;
  }

  setLoggedIn?: (loggedIn: boolean) => void;
  switchMain?: (mode: Types.MainView.Mode) => void;
}
