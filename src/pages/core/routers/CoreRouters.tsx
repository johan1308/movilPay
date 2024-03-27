import { Suspense, useMemo, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { SidebarCore } from "../components/SidebarCore";
import { DashboardCore } from "../views/dashboard/DashboardCore";
import { ReportesCore } from "../views/reportes/ReportesCore";
import { CobranzasCore } from "../views/cobranzas/CobranzasCore";
import { ClientesCore } from "../views/clientes/ClientesCore";
import { UsuariosCore } from "../views/usuarios/UsuariosCore";

import { navigation } from "../data/menu";

export const CoreRouters = () => {
  const param = useParams();
  const ruta = param["*"];
  const getTitle = useMemo(() => {
    const filtrado = navigation.find((title) => title.path == ruta);
    if (!filtrado) return "";
    return (
      <>
        <p className="text-3xl font-semibold flex text-tertiary dark:text-white">
          {filtrado.name} <filtrado.icon className="ml-3 mt-1" />
        </p>
        <hr className="mb-10 mt-2"/>
      </>
    );
  }, [ruta]);

  return (
    <>
      <SidebarCore>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">Cargando...</div>
          }
        >
          <>
            {getTitle}
            <Routes>
              <Route path="/" element={<Navigate to="dashboard/" />} />
              <Route path="dashboard/" element={<DashboardCore />} />
              <Route path="reports/" element={<ReportesCore />} />
              <Route path="collections/" element={<CobranzasCore />} />
              <Route path="clients/" element={<ClientesCore />} />
              <Route path="users/" element={<UsuariosCore />} />
            </Routes>
          </>
        </Suspense>
      </SidebarCore>
    </>
  );
};
