import { createSlice } from "@reduxjs/toolkit";

import { Payment } from "../../pages/core/interfaces/PaymentInterfaces";
import { CompaniesThunks } from "./thunks";
import { Company } from "../../pages/core/interfaces/CompaniesInterfaces";

export interface initialStateCompanies {
  isLoading: boolean;
  companies: Company[];
  count: number;
  page?: number;
}

export const initialStateCompanies: initialStateCompanies = {
  isLoading: false,
  count: 0,
  companies: [],
};

export const CompaniesSlice = createSlice({
  name: "Companies",
  initialState: initialStateCompanies,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CompaniesThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CompaniesThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.companies = payload.results;
        state.count = payload.count;
      });
  },
});

export const {} = CompaniesSlice.actions;
