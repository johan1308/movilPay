import { createAsyncThunk } from "@reduxjs/toolkit";
import { movilPayAPI } from "../../api/movilPayAPI";
import { CompaniesParams } from "../../pages/core/params/companies/companiesParams";

export const CompaniesThunks = createAsyncThunk(
  "companies",
  async (params?: CompaniesParams) => {
    return movilPayAPI
      .get("/companies/", { params })
      .then((result) => {
        return result.data;
      })
      .catch((err) => {
        return [];
      });
  }
);
export const PatchCompaniesThunks = (body: any, id: any) => {
  return movilPayAPI.patch(`/api/companies/${id}/`, body);
};
