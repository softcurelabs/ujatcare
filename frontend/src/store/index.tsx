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
import QuickBookReducer from "./quickbook/QuickbookSlice";
import ContactReducer from "./contact/ContactSlice";
import InvoiceReducer from "./invoice/InvoiceSlice";
import ApartmentReducer from "./apartment/ApartmentSlice";

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
    Inspection: InspectionReducer,
    QuickBook: QuickBookReducer,
    Contact: ContactReducer,
    Invoice: InvoiceReducer,
    Apartment: ApartmentReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
