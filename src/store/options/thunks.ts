import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";
import { PaymentParams } from "../../pages/core/params/payment/payments/paymentParams";

export const OptionsThunks = createAsyncThunk(
  "options",
  async (params?: any) => {
    return movilPayAPI
      .get("/api/options/", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);