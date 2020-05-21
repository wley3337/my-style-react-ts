import {
  CasualBooleanActionTypes,
  CASUAL_TRUE,
  CASUAL_FALSE
} from "./CausalBoolean.types";

export const casualBoolean = (
  state = true,
  action: CasualBooleanActionTypes
): boolean => {
  switch (action.type) {
    case CASUAL_TRUE:
      return true;
    case CASUAL_FALSE:
      return false;
    default:
      return state;
  }
};
