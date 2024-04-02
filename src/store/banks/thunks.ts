import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";

export const BanksThunks = createAsyncThunk("banks", async () => {
  return movilPayAPI
    .get("/api/payments/banks/")
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      return [];
    });
});
