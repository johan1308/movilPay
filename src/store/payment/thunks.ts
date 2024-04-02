import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";
import { PaymentParams } from "../../pages/core/params/payment/paymentParams";

export const PaymentsThunks = createAsyncThunk("payments", async (params?:PaymentParams) => {
  return movilPayAPI
    .get("/api/payments/",{params})
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return [];
    });
});
