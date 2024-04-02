import { lazy } from "react";
import {
  FcBriefcase,
  FcBusinessman,
  FcComboChart,
  FcConferenceCall,
  FcCurrencyExchange,
  FcLibrary,
  FcViewDetails,
} from "react-icons/fc";

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
    children:[]
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
    children:[]
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
    children:[]
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
    children:[]
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
    children:[]
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
    children:[]
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
    children:[]
  },
];
