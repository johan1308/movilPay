
import React, { lazy } from "react";
import {
  FcBriefcase,
  FcBusinessman,
  FcComboChart,
  FcConferenceCall,
  FcCurrencyExchange,
  FcLibrary,
  FcViewDetails,
} from "react-icons/fc";
import { CompaniesRouters } from "../views/companies/routers/CompaniesRouters";
import { RouteProps } from "react-router-dom";
interface navigation {
    name: string;
    path: string;
    icon: any;
    superAdmin: boolean;
    lazyLoad: React.LazyExoticComponent<() => JSX.Element>;
    children: null | JSX.Element|React.ReactNode
}

export const navigation = [
  {
    name: "Estadisticas",
    path: "dashboard/",
    icon: FcComboChart,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/dashboard/DashboardCore"
        )
    ),
    children:null
  },
  {
    name: "Usuarios",
    path: "users/",
    icon: FcConferenceCall,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/usuarios/UsuariosCore"
        )
    ),
    children:null
  },
  {
    name: "Reportes",
    path: "reports/",
    icon: FcViewDetails,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/reportes/ReportesCore"
        )
    ),
    children:null
  },
  {
    name: "Clientes",
    path: "clients/",
    icon: FcBusinessman,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/clientes/ClientesCore"
        )
    ),
    children:null
  },
  {
    name: "Pagos",
    path: "payments/",
    icon: FcCurrencyExchange,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(/* webpackChunkName: "Payments" */ "../views/pagos/PaymentCore")
    ),
    children:null
  },
  {
    name: "Compañias",
    path: "companies/",
    icon: FcLibrary,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/companies/CompaniesCore"
        )
    ),
    children:CompaniesRouters
  },
  {
    name: "Cobranzas",
    path: "collections/",
    icon: FcBriefcase,
    superAdmin: false,
    lazyLoad: lazy(
      () =>
        import(
          /* webpackChunkName: "Clientes" */ "../views/cobranzas/CobranzasCore"
        )
    ),
    children:null
  },
];
