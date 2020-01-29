import { put, call, takeEvery } from "redux-saga/effects";
import {
  SUB_CREATE_USER_FORM,
  ISubCreateUserForm,
  ISubCreateUserFormAction
} from "./SubCreateUserForm.types";

export const submitCreateUserForm = (
  subCreateUserFormObj: ISubCreateUserForm
): ISubCreateUserFormAction => {
  return { type: SUB_CREATE_USER_FORM, payload: subCreateUserFormObj };
};
