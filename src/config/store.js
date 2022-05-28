import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const appReducer = combineReducers({});

const rootReducer = (state, action) => appReducer(state, action);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
