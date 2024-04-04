import { createSlice } from "@reduxjs/toolkit";
import { MethodPaymentsThunks, PaymentsThunks } from "./thunks";
import { MethodPayment, Payment } from "../../pages/core/interfaces/PaymentInterfaces";

export interface initialStateMethodPayments {
  isLoading: boolean;
  methods_payments:MethodPayment[];
  count:number 
  page?:number
}

export const initialStateMethodPayments: initialStateMethodPayments = {
  isLoading: false,
  count: 0,
  methods_payments:[]
};

export const MethodPaymentsSlice = createSlice({
  name: "MethodsPayment",
  initialState: initialStateMethodPayments,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(MethodPaymentsThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(MethodPaymentsThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.methods_payments = payload.results
        state.count = payload.count
      });
  },
});

export const {} = MethodPaymentsSlice.actions;