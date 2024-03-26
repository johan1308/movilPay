import { createSlice } from "@reduxjs/toolkit";

type VistaInicial='add'|'transferir'|'racks'

export interface inicialModalAddAlmacen {
  isOpen: boolean;
  start:VistaInicial
}

const initialState: inicialModalAddAlmacen = {
  isOpen : false,
  start:'add'
};

export const modalAddAlmacen = createSlice({
  name: "addAlmacen",
  initialState,
  reducers: {
    mostrarModalAddAlmacen(state,{payload}) {
      state.isOpen = true;
      state.start = payload
    },
    ocultarModalAddAlmacen(state) {
      state.isOpen = false;
    },
  },
});

export const { mostrarModalAddAlmacen, ocultarModalAddAlmacen } =
  modalAddAlmacen.actions;
