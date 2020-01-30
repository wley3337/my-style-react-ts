import { put, call, takeEvery } from "redux-saga/effects";
import {
  SUB_CREATE_USER_FORM,
  ISubCreateUserForm,
  ISubCreateUserFormAction
} from "./SubCreateUserForm.types";

export const subCreateUserForm = (
  subCreateUserFormObj: ISubCreateUserForm
): ISubCreateUserFormAction => {
  return { type: SUB_CREATE_USER_FORM, payload: subCreateUserFormObj };
};

export function* watchSubCreateUserForm() {
  yield takeEvery(SUB_CREATE_USER_FORM, handleSubCreateUserForm);
}

export function* handleSubCreateUserForm(action: ISubCreateUserFormAction) {}
