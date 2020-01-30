import { put, call, takeEvery } from "redux-saga/effects";
import {
  SUB_CREATE_USER_FORM,
  ISubCreateUserForm,
  ISubCreateUserFormAction
} from "./SubCreateUserForm.types";
import { BASE_URL, setUser } from "../actions";

export const subCreateUserForm = (
  subCreateUserFormObj: ISubCreateUserForm
): ISubCreateUserFormAction => {
  return { type: SUB_CREATE_USER_FORM, payload: subCreateUserFormObj };
};

export function* watchSubCreateUserForm() {
  yield takeEvery(SUB_CREATE_USER_FORM, handleSubCreateUserForm);
}

export function* handleSubCreateUserForm(action: ISubCreateUserFormAction) {
  const { createUserForm, history } = action.payload;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: createUserForm })
  };

  try {
    const res = yield call(fetch, BASE_URL + "/users", options);
    const resObj = yield call([res, "json"]);

    if (resObj.success) {
      yield put(setUser(resObj.user));
      localStorage.setItem("myStyle-Token", resObj.token);
      history.push("/dashboard");
    }
  } catch (err) {
    console.error("SubCreateUserForm: ", err);
  }
}
