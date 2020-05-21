import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import { createMemoryHistory } from "history";
import { BASE_URL, setUser } from "../actions";
import {
  subLoginForm,
  watchSubLoginForm,
  handleSubLoginForm
} from "./SubLoginFrom.actions";
import { ISubLoginForm, SUB_LOGIN } from "./SubLoginForm.types";
import { ILoginForm } from "../../components/LoginForm/LoginForm";

describe("SubLoginForm.redux", () => {
  const history = createMemoryHistory();
  const testLoginForm: ILoginForm = { username: "test123", password: "123" };
  const testSubLoginForm: ISubLoginForm = {
    loginForm: testLoginForm,
    history: history
  };

  describe("subLoginForm action creator", () => {
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

  describe("handleSubLoginForm flow", () => {
    const userObj = { username: "Jr", firstName: "Bob", lastName: "Patt" };

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
    test("on success adds user to store", () => {
      const clone = gen.clone();
      expect(clone.next(mockResObj).value).toEqual(
        put(setUser(mockResObj.user))
      );
      expect(clone.next().done).toBe(true);
    });
  });
});
