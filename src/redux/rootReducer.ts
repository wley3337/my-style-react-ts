import { combineReducers } from "redux";
import { user } from "./User.redux/User.reducers";

const rootReducer = combineReducers({ user });

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
