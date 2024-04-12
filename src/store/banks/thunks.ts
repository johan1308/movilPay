import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";
import { PaymentParams } from "../../pages/core/params/payment/payments/paymentParams";

export const BanksThunks = createAsyncThunk("banks", async (params?:PaymentParams) => {
  return movilPayAPI
    .get("/api/payments/banks/",{params})
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return [];
    });
});
