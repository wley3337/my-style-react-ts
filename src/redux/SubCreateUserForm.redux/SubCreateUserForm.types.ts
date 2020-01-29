import { ICreateUserForm } from "../../components/CreateUserForm/CreateUserForm";
import { History } from "history";
export const SUB_CREATE_USER_FORM: string = "SUB_CREATE_USER_FORM";

export interface ISubCreateUserForm {
  createUserForm: ICreateUserForm;
  history: History;
}

export interface ISubCreateUserFormAction {
  type: typeof SUB_CREATE_USER_FORM;
  payload: ISubCreateUserForm;
}
