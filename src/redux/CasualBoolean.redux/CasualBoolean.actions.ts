import {
  CASUAL_TRUE,
  ICasualBooleanTrueAction,
  ICasualBooleanFalseAction,
  CASUAL_FALSE
} from "./CausalBoolean.types";

export const setCasualTrue = (): ICasualBooleanTrueAction => ({
  type: CASUAL_TRUE
});

export const setCasualFalse = (): ICasualBooleanFalseAction => ({
  type: CASUAL_FALSE
});
