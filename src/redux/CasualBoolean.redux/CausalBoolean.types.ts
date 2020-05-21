export const CASUAL_TRUE: string = "CASUAL_TRUE";
export const CASUAL_FALSE: string = "CASUAL_FALSE";

export interface ICasualBooleanTrueAction {
  type: typeof CASUAL_TRUE;
}

export interface ICasualBooleanFalseAction {
  type: typeof CASUAL_FALSE;
}

export type CasualBooleanActionTypes =
  | ICasualBooleanFalseAction
  | ICasualBooleanTrueAction;
