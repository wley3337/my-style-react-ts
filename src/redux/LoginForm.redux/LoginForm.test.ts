import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import {
  subLoginForm,
  watchSubLoginForm,
  handleSubLoginForm
} from "./LoginFrom.actions";
import { ISubLoginForm, SUB_LOGIN } from "./LoginForm.types";
import { createMemoryHistory } from "history";
import { ILoginForm } from "../../components/LoginForm/LoginForm";
import { BASE_URL, setUser } from "../actions";

describe("LoginForm.redux", () => {
  const history = createMemoryHistory();
  const testLoginForm: ILoginForm = { username: "test123", password: "123" };
  const testSubLoginForm: ISubLoginForm = {
    loginForm: testLoginForm,
    history: history
  };

  describe("subLoginForm action", () => {
    it("returns correct action", () => {
      const res = { type: SUB_LOGIN, payload: testSubLoginForm };
      expect(subLoginForm(testSubLoginForm)).toEqual(res);
    });
  });

  describe("watchSubLoginForm", () => {
    const gen = cloneableGenerator(watchSubLoginForm)();
    it("yields handleSubLoginForm and finishes", () => {
      expect(gen.next().value.payload.args).toEqual([
        SUB_LOGIN,
        handleSubLoginForm
      ]);
      expect(gen.next().done).toBe(true);
    });
  });

  describe("handleSubLoginForm", () => {
    const userObj = { username: "test123", firstName: "Bob", lastName: "Patt" };

    const mockResObj = {
      success: true,
      user: userObj,
      token: "fakeToken",
      json: jest.fn()
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
      },
      body: JSON.stringify({ user: testLoginForm })
    };
    const gen = cloneableGenerator(handleSubLoginForm)({
      type: SUB_LOGIN,
      payload: testSubLoginForm
    });

    expect(gen.next().value).toEqual(call(fetch, BASE_URL + "/login", options));
    expect(gen.next(mockResObj).value).toEqual(call([mockResObj, "json"]));
    test("on success adds user to store, adds token to local storage, and pushes `/dashboard` to history", () => {
      const clone = gen.clone();
      expect(clone.next(mockResObj).value).toEqual(
        put(setUser(mockResObj.user))
      );
      expect(clone.next().done).toBe(true);
    });
  });
});
