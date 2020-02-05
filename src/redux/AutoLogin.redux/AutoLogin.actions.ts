import { put, call, takeLatest } from "redux-saga/effects";
import { IAutoLoginAction, AUTO_LOGIN } from "./AutoLogin.types";
import { History } from "history";
import { BASE_URL, setUser } from "../actions";

export const autoLogin = (history: History): IAutoLoginAction => ({
  type: AUTO_LOGIN,
  payload: history
});
export function* watchAutoLogin() {
  yield takeLatest(AUTO_LOGIN, handleAutoLogin);
}
export function* handleAutoLogin(action: IAutoLoginAction) {
  const history = action.payload;
  const token = localStorage.getItem("myStyle-Token");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const res = yield call(fetch, BASE_URL + "/auto_login", options);
    const resObj = yield call([res, "json"]);

    if (resObj.success) {
      yield put(setUser(resObj.user));
      history.push("/closet");
    }
  } catch (err) {
    console.error("AutoLogin Error: ", err);
  }
}
