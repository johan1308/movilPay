import { configureStore } from "@reduxjs/toolkit";
import {  BanksSlice } from "./banks/BanksSlice";
import { PaymentsSlice } from "./payment/PaymentSlice";
import { CompaniesSlice } from "./companies/CompaniesSlice";
import { OptionsSlice } from "./options/OptionSlice";
import { MethodPaymentsSlice } from "./payment/MethodPaymentsSlice";
import { DashboardSlice } from "./dashboard/DashboardSlice";
import { DashCompanySlice } from "./dashboard/DashCompanySlice";


export const store = configureStore({
  reducer: {
    banks:BanksSlice.reducer,
    payments:PaymentsSlice.reducer,
    companies:CompaniesSlice.reducer,
    options:OptionsSlice.reducer,
    methodPayments:MethodPaymentsSlice.reducer,
    dashboard:DashboardSlice.reducer,
    dashCompany:DashCompanySlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch