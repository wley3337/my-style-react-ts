import { all } from "redux-saga/effects";
import { watchSubLoginForm } from "./actions";

export default function* rootSaga() {
  yield all([watchSubLoginForm()]);
}
