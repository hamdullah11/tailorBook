import { createStore, combineReducer, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./reducer";

// const rootReducer = combineReducer({ loginReducer });

export const Store = createStore(loginReducer, applyMiddleware(thunk));
