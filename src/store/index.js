import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { hamburgerReducer } from "./hamburgerReducer";


const rootReducer = combineReducers({
  hamburger: hamburgerReducer
})

export const store = configureStore({
  reducer: rootReducer,
})