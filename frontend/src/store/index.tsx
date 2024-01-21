import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import LayoutReducer from "./layout/LayoutSlice";

import AuthReducer from "./auth/AuthSlice";

const store = configureStore({
  reducer: {
    Layout: LayoutReducer,
    Auth: AuthReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
