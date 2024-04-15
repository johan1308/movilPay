import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";
import { PaymentParams } from "../../pages/core/params/payment/payments/paymentParams";

export const PaymentsThunks = createAsyncThunk(
  "payments",
  async (params?: PaymentParams) => {
    return movilPayAPI
      .get("/api/payments/", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);

export const MethodPaymentsThunks = createAsyncThunk(
  "MethodPayments",
  async (params?: PaymentParams) => {
    return movilPayAPI
      .get("/api/payments/payment_methods/", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);


export const CreatePaymentThunks=(body:any)=>{
  return movilPayAPI.post(`/api/payments/`,body)
}