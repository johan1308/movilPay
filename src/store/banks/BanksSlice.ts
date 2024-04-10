import { createSlice } from "@reduxjs/toolkit";
import { BanksThunks } from "./thunks";
import { Banks } from "../../pages/core/interfaces/BanksInterfaces";

export interface initialStateBanks {
  isLoading: boolean;
  banks:Banks[];
}

const initialStateBanks: initialStateBanks = {
  isLoading: false,
  banks: [],
};

export const BanksSlice = createSlice({
  name: "BanksSlice",
  initialState: initialStateBanks,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(BanksThunks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(BanksThunks.fulfilled, (state,  {payload} ) => {
        state.isLoading= false
        state.banks= payload
      });
  },
});

export const {} = BanksSlice.actions;
