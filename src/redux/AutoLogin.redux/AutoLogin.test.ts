import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import { createMemoryHistory } from "history";
import {
  BASE_URL,
  setUser,
  autoLogin,
  watchAutoLogin,
  handleAutoLogin
} from "../actions";
import { AUTO_LOGIN } from "./AutoLogin.types";

describe("AutoLogin", () => {
  const history = createMemoryHistory();
  const testAction = { type: AUTO_LOGIN, payload: history };
  describe("AutoLogin Action", () => {
    it("returns correct action", () => {
      const res = testAction;
      expect(autoLogin(history)).toEqual(res);
    });
  });

  describe("watchAutoLogin", () => {
    const gen = cloneableGenerator(watchAutoLogin)();
    it("yields handleAutoLogin and finishes", () => {
      expect(gen.next().value.payload.args).toEqual([
        AUTO_LOGIN,
        handleAutoLogin
      ]);
      expect(gen.next().done).toBe(true);
    });
  });

  describe("handleAutoLogin flow", () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        //null is the token value to account for no local token
        Authorization: `Bearer null`
      }
    };
    const userObj = { username: "Jr", firstName: "Bob", lastName: "Patt" };

    const mockResObj = {
      success: true,
      user: userObj,
      token: "fakeToken",
      json: jest.fn()
    };

    const gen = cloneableGenerator(handleAutoLogin)(testAction);
    expect(gen.next().value).toEqual(call(fetch, BASE_URL + "/users", options));
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
