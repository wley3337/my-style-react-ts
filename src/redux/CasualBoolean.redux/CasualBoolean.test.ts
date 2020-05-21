import React from "react";
import { casualBoolean } from "./CasualBoolean.reducers";
import { CASUAL_FALSE, CASUAL_TRUE } from "./CausalBoolean.types";
import { setCasualTrue, setCasualFalse } from "../actions";

describe("CasualBoolean.redux", () => {
  describe("reducer", () => {
    it("returns true on init", () => {
      const initAction = { type: "init" };
      expect(casualBoolean(undefined, initAction)).toBe(true);
    });

    it("returns false on CASUAL_FALSE", () => {
      const testAction = { type: CASUAL_FALSE };
      expect(casualBoolean(true, testAction)).toBe(false);
    });
    it("returns false on CASUAL_TRUE", () => {
      const testAction = { type: CASUAL_TRUE };
      expect(casualBoolean(false, testAction)).toBe(true);
    });
  });
  describe("actions", () => {
    it("returns correct object for setCasualTrue", () => {
      const result = { type: CASUAL_TRUE };
      expect(setCasualTrue()).toEqual(result);
    });
    it("returns correct object for setCasualFalse", () => {
      const result = { type: CASUAL_FALSE };
      expect(setCasualFalse()).toEqual(result);
    });
  });
});
