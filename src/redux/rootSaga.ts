import { all } from "redux-saga/effects";
import { watchSubLoginForm, watchSubCreateUserForm } from "./actions";

export default function* rootSaga() {
  yield all([watchSubLoginForm(), watchSubCreateUserForm()]);
}
