import { createSlice } from "@reduxjs/toolkit";

export interface inicialModalTransferirAlmacen {
  isOpen: boolean;
}

const initialState: inicialModalTransferirAlmacen = {
  isOpen : false,
};

export const modalTransferirAlmacen = createSlice({
  name: "transferirAlmacen",
  initialState,
  reducers: {
    mostrarTransferirAlmacen(state) {
      state.isOpen = true;
    },
    ocultarTransferirAlmacen(state) {
      state.isOpen = false;
    },
  },
});

export const { mostrarTransferirAlmacen, ocultarTransferirAlmacen } =
modalTransferirAlmacen.actions;
