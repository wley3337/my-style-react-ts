import {
  IUser,
  ISetUserAction,
  SET_USER,
  CLEAR_USER,
  IClearUserAction
} from "./User.types";

import { initUser } from "./User.reducers";

export const setUser = (user: IUser): ISetUserAction => {
  return { type: SET_USER, payload: user };
};

export const clearUser = (): IClearUserAction => {
  return { type: CLEAR_USER, payload: initUser };
};
