import { History } from "history";
import { ILoginForm } from "../../components/LoginForm/LoginForm";

export const SUB_LOGIN: string = "SUB_LOGIN";

export interface ISubLoginForm {
  loginForm: ILoginForm;
  history: History;
}

export interface ISubLoginFormAction {
  type: typeof SUB_LOGIN;
  payload: ISubLoginForm;
}
