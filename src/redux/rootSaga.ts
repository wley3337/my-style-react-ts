import { all } from "redux-saga/effects";
import {
  watchSubLoginForm,
  watchSubCreateUserForm,
  watchAutoLogin
} from "./actions";

export default function* rootSaga() {
  yield all([watchSubLoginForm(), watchSubCreateUserForm(), watchAutoLogin()]);
}
