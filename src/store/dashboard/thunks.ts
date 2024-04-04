import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";

export const DashboardThunks = createAsyncThunk(
  "dashboard",
  async (params?: any) => {
    return movilPayAPI
      .get("/api/companies/dashboard/ ", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);
