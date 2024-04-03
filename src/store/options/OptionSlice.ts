import { createSlice } from "@reduxjs/toolkit";

import { Payment } from "../../pages/core/interfaces/PaymentInterfaces";
import { OptionsThunks } from "./thunks";

export interface initialStateOptions {
  isLoading: boolean;
  options:Payment[];
  count:number 
  page?:number
}

export const initialStateOptions: initialStateOptions = {
  isLoading: false,
  count: 0,
  options:[]
};

export const OptionsSlice = createSlice({
  name: "Options",
  initialState: initialStateOptions,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(OptionsThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(OptionsThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.options = payload.results
        state.count = payload.count
      });
  },
});

export const {} = OptionsSlice.actions;