import { createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "../../pages/core/interfaces/DashboardInterfaces";
import { DashboardParamsThunks, DashboardThunks } from "./thunks";

export interface DashboardPaymentSliceInterface {
  isLoading: boolean;
  dashboard: Dashboard[];
  count: number;
  page?: number;
}

export const InitialDashboardPaymentSlice: DashboardPaymentSliceInterface = {
  isLoading: false,
  count: 0,
  dashboard: [],
};

export const DashboardPaymentSlice = createSlice({
  name: "DashboardPaymentSlice",
  initialState: InitialDashboardPaymentSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(DashboardParamsThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DashboardParamsThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.dashboard = payload;
        state.count = payload.count;
      });
  },
});

export const {} = DashboardPaymentSlice.actions;
