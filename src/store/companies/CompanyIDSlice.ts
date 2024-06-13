import { createSlice } from "@reduxjs/toolkit";
import { CompaniesIDThunks } from "./thunks";
import { Company } from "../../pages/core/interfaces/CompaniesInterfaces";

export interface initialStateCompanyIDInterface {
  isLoading: boolean;
  companies: Company | null;
}

export const initialStateCompanyID: initialStateCompanyIDInterface = {
  isLoading: false,
  companies: null,
};

export const CompanyIDSlice = createSlice({
  name: "CompaniesID",
  initialState: initialStateCompanyID,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CompaniesIDThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CompaniesIDThunks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.companies = payload
      });
  },
});

export const {} = CompanyIDSlice.actions;
