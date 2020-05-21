import { combineReducers } from "redux";
import { user } from "./User.redux/User.reducers";
import { casualBoolean } from "./CasualBoolean.redux/CasualBoolean.reducers";

const rootReducer = combineReducers({ user, casualBoolean });

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
