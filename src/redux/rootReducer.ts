import { combineReducers } from "redux";

interface IInitState {
  isThis: string;
}
const initState: IInitState = { isThis: "working" };
const testReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  testReducer
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
