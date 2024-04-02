import { createSlice } from "@reduxjs/toolkit";
import { BanksThunks } from "./thunks";
import { Banks } from "../../pages/core/interfaces/BanksInterfaces";

export interface initialStateBanksDashboard {
  isLoading: boolean;
  banks:Banks[];
}

const initialStateBanksDashboard: initialStateBanksDashboard = {
  isLoading: false,
  banks: [],
};

export const BanksDashboardSlice = createSlice({
  name: "BanksDashboardSlice",
  initialState: initialStateBanksDashboard,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BanksThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(BanksThunks.fulfilled, (state,  {payload} ) => {
        state.isLoading= false
        state.banks= payload
      });
  },
});

export const {} = BanksDashboardSlice.actions;
