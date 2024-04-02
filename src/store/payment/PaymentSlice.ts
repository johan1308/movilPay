import { createSlice } from "@reduxjs/toolkit";
import { PaymentsThunks } from "./thunks";
import { Payment } from "../../pages/core/interfaces/PaymentInterfaces";

export interface initialStatePayments {
  isLoading: boolean;
  payments:Payment[];
  count:number 
  page?:number
}

export const initialStatePayments: initialStatePayments = {
  isLoading: false,
  count: 0,
  payments:[]
};

export const PaymentsSlice = createSlice({
  name: "Payments",
  initialState: initialStatePayments,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PaymentsThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PaymentsThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.payments = payload.results
        state.count = payload.count
      });
  },
});

export const {} = PaymentsSlice.actions;
