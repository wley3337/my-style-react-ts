import { cloneableGenerator } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import { createMemoryHistory } from "history";
import { BASE_URL, setUser } from "../actions";
import { ICreateUserForm } from "../../components/CreateUserForm/CreateUserForm";
import {
  subCreateUserForm,
  handleSubCreateUserForm,
  watchSubCreateUserForm
} from "./SubCreateUserForm.actions";
import {
  ISubCreateUserForm,
  SUB_CREATE_USER_FORM
} from "./SubCreateUserForm.types";

describe("SubCreateUserForm", () => {
  const history = createMemoryHistory();
  const testCreateUserForm: ICreateUserForm = {
    firstName: "Bob",
    lastName: "Patt",
    username: "Jr",
    password: "123"
  };
  const testSubCreateUserForm: ISubCreateUserForm = {
    createUserForm: testCreateUserForm,
    history: history
  };

  describe("subCreateUserForm action creator", () => {
    it("returns correct action", () => {
      const res = {
        type: SUB_CREATE_USER_FORM,
        payload: testSubCreateUserForm
      };
      expect(subCreateUserForm(testSubCreateUserForm)).toEqual(res);
    });
  });

  describe("watchSubCreateUserForm", () => {
    const gen = cloneableGenerator(watchSubCreateUserForm)();
    it("yields handleSubCreateUserForm and finishes", () => {
      expect(gen.next().value.payload.args).toEqual([
        SUB_CREATE_USER_FORM,
        handleSubCreateUserForm
      ]);
      expect(gen.next().done).toBe(true);
    });
  });

  describe("handleSubCreateUserForm flow", () => {
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
      body: JSON.stringify({ user: testCreateUserForm })
    };

    const gen = cloneableGenerator(handleSubCreateUserForm)({
      type: SUB_CREATE_USER_FORM,
      payload: testSubCreateUserForm
    });
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
