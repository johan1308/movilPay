import { createSlice } from "@reduxjs/toolkit";

import { Company } from "../../pages/core/interfaces/CompaniesInterfaces";
import { getCookie } from "../../config/cookies";

type tipeComany = {
  id: number;
  name: string;
  rif: string;
};

export interface initialStateDashCompany {
  company: tipeComany[];
}

export const initialStateDashCompany: initialStateDashCompany = {
  company: getCookie("companyDash") || [],
};

export const DashCompanySlice = createSlice({
  name: "DashCompany",
  initialState: initialStateDashCompany,
  reducers: {
    setCompanyDash(state, { payload }) {
      state.company = payload;
    },
  },
});

export const { setCompanyDash } = DashCompanySlice.actions;
