import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import LayoutReducer from "./layout/LayoutSlice";
import FlatReducer from "./flat/FlatSlice";
import CustomerAuthReducer from "./auth/CustomerAuthSlice";

import AuthReducer from "./auth/AuthSlice";
import NoticeReducer from "./notice/NoticeSlice";
import UserReducer from "./user/UserSlice";
import MaintananceReducer from "./maintanance/MaintananceSlice";
import ApplicationReducer from "./application/ApplicationSlice";
import InspectionReducer from "./inspection/InspectionSlice";

const store = configureStore({
  reducer: {
    Layout: LayoutReducer,
    Auth: AuthReducer,
    Flat: FlatReducer,
    CustomerAuth: CustomerAuthReducer,
    Notice: NoticeReducer,
    User: UserReducer,
    Maintanance: MaintananceReducer,
    Application: ApplicationReducer,
    Inspection: InspectionReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
