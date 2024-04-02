import { Suspense, useMemo, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { SidebarCore } from "../components/SidebarCore";
import DashboardCore  from "../views/dashboard/DashboardCore";
import ReportesCore from "../views/reportes/ReportesCore";
import CobranzasCore from "../views/cobranzas/CobranzasCore";
import ClientesCore from "../views/clientes/ClientesCore";
import UsuariosCore from "../views/usuarios/UsuariosCore";

import { navigation } from '../data/menu';
import { Loading } from "../../../components/Loading";

export const CoreRouters = () => {
  const param = useParams();
  const ruta = param["*"];
  const getTitle = useMemo(() => {
    const filtrado = navigation.find((title) => title.path == ruta);
    if (!filtrado) return "";
    return (
      <>
        <p className="text-3xl font-semibold flex text-secondary dark:text-white">
          {filtrado.name} <filtrado.icon className="ml-3 mt-1" />
        </p>
        
      </>
    );
  }, [ruta]);

  return (
    <>
    
      <SidebarCore path={getTitle}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <Loading/>
            </div>
          }
        >
          <>
            
            <Routes>
              <Route path="/" element={<Navigate to="dashboard/" />} />
              {navigation.map((route)=>(
                <Route key={route.path} path={route.path} element={<route.lazyLoad />} />  
              ))}
            </Routes>
          </>
        </Suspense>
      </SidebarCore>
    </>
  );
};
