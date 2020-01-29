import { put, call, takeEvery } from "redux-saga/effects";
import {
  ISubLoginForm,
  SUB_LOGIN,
  ISubLoginFormAction
} from "./SubLoginForm.types";
import { BASE_URL, setUser } from "../actions";

export const subLoginForm = (subLoginFormObj: ISubLoginForm) => {
  return { type: SUB_LOGIN, payload: subLoginFormObj };
};

export function* watchSubLoginForm() {
  yield takeEvery(SUB_LOGIN, handleSubLoginForm);
}

export function* handleSubLoginForm(action: ISubLoginFormAction) {
  const { loginForm, history } = action.payload;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: loginForm })
  };

  try {
    const res = yield call(fetch, BASE_URL + "/login", options);
    const resObj = yield call([res, "json"]);

    if (resObj.success) {
      //set user
      yield put(setUser(resObj.user));
      //set JWT token to local storage
      localStorage.setItem("myStyle-Token", resObj.token);
      //push history to redirect
      history.push("/dashboard");
    }
    if (!resObj.success) {
      //handle errors
      // const error = "Wrong username or password.";
    }
  } catch (err) {
    console.error("SubLoginForm: ", err);
  }
}
