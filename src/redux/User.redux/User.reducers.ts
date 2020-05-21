import { IUser, UserActionTypes, SET_USER, CLEAR_USER } from "./User.types";

export const initUser: IUser = {
  firstName: "",
  lastName: "",
  username: ""
};

export const user = (state = initUser, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
