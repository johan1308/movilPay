import { createSlice } from "@reduxjs/toolkit";

import { Payment } from "../../pages/core/interfaces/PaymentInterfaces";
import { DashboardThunks } from "./thunks";


export interface initialStateDashboard {
  isLoading: boolean;
  dashboard:any;
  count:number 
  page?:number
}

export const initialStateDashboard: initialStateDashboard = {
  isLoading: false,
  count: 0,
  dashboard:[]
};

export const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState: initialStateDashboard,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DashboardThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DashboardThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dashboard = payload.results
        state.count = payload.count
      });
  },
});

export const {} = DashboardSlice.actions;