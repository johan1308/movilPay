import { createSlice } from "@reduxjs/toolkit";

import { Payment } from "../../pages/core/interfaces/PaymentInterfaces";
import { DashboardThunks } from "./thunks";
import { Dashboard } from "../../pages/core/interfaces/DashboardInterfaces";


export interface initialStateDashboard {
  isLoading: boolean;
  dashboard:Dashboard[];
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
        state.dashboard = payload
        state.count = payload.count
      });
  },
});

export const {} = DashboardSlice.actions;