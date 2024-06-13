import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";

export const DashboardThunks = createAsyncThunk(
  "dashboard",
  async (params?: any) => {
    return movilPayAPI
      .get("/companies/dashboard/", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);

export const DashboardParamsThunks = createAsyncThunk(
  "DashboardParams",
  async (params?: any) => {
    return movilPayAPI
      .get("/companies/dashboard/", { params })
      .then((result) => {
        
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);
export const DashboardAsyncThunks = (params?: any) => {
  return movilPayAPI.get("/companies/dashboard/", { params });
};
