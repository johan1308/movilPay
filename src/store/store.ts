import { configureStore } from "@reduxjs/toolkit";
import { modalAddAlmacen } from "./modals/almacen/modalAddAlmacen";

export const store = configureStore({
  reducer: {
    modalAddAlmacen: modalAddAlmacen.reducer,
  },
});
