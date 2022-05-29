import { combineReducers, Reducer } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const appReducer: Reducer = combineReducers({});

const rootReducer = (state: any, action: any) => appReducer(state, action);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
