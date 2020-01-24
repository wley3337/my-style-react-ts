export const SET_USER: string = "SET_USER";
export const CLEAR_USER: string = "CLEAR_USER";

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
}

export interface ISetUserAction {
  type: typeof SET_USER;
  payload: IUser;
}

export interface IClearUserAction {
  type: typeof CLEAR_USER;
  payload: IUser;
}

export type UserActionTypes = ISetUserAction | IClearUserAction;
