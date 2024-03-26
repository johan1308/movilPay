import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { SidebarCore } from "../components/SidebarCore";
import { DashboardCore } from "../pages/dashboard/DashboardCore";
import { ReportesCore } from "../pages/reportes/ReportesCore";
import { CobranzasCore } from "../pages/cobranzas/CobranzasCore";
import { ClientesCore } from "../pages/clientes/ClientesCore";
import { UsuariosCore } from "../pages/usuarios/UsuariosCore";

export const CoreRouters = () => {
  return (
    <>
      <SidebarCore>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">Cargando...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="dashboard/" />} />
            <Route path="dashboard/" element={<DashboardCore />} />
            <Route path="reports/" element={<ReportesCore />} />
            <Route path="collections/" element={<CobranzasCore />} />
            <Route path="clients/" element={<ClientesCore />} />
            <Route path="users/" element={<UsuariosCore />} />
          </Routes>
        </Suspense>
      </SidebarCore>
    </>
  );
};
