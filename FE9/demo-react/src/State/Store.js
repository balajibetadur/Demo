import { configureStore } from "@reduxjs/toolkit"; //npm i @reduxjs/toolkit
import reducers from "./Reducers/index";

export const store = configureStore({reducer: reducers})