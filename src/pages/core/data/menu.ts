import React, { lazy } from "react";
import {
  FcBriefcase,
  FcBusinessman,
  FcComboChart,
  FcConferenceCall,
  FcCurrencyExchange,
  FcLibrary,
  FcOrganization,
  FcPlus,
  FcViewDetails,
} from "react-icons/fc";

export const navigation = [
  {
    name: "Estadisticas",
    path: "dashboard/",
    icon: FcComboChart,
    superAdmin: false,
    children: null,
  },
  {
    name: "Usuarios",
    path: "users/",
    icon: FcConferenceCall,
    superAdmin: false,
    children: null,
  },
  {
    name: "Reportes",
    path: "reports/",
    icon: FcViewDetails,
    superAdmin: false,
    children: null,
  },
  {
    name: "Clientes",
    path: "clients/",
    icon: FcBusinessman,
    superAdmin: false,
    children: null,
  },
  {
    name: "Pagos",
    path: "payments/",
    icon: FcCurrencyExchange,
    superAdmin: false,
    children: null,
  },
  {
    name: "Compañias",
    path: "companies/",
    icon: FcLibrary,
    superAdmin: false,
    children: [
      {
        name: "Todas las compañía",
        path: "companies/",
        icon: FcOrganization,
        superAdmin: false,
        children: null,
      },
      {
        name: "Registrar compañía",
        path: "companies/create/",
        icon: FcPlus ,
        superAdmin: false,
        children: null,
      },
    ],
  },
  {
    name: "Cobranzas",
    path: "collections/",
    icon: FcBriefcase,
    superAdmin: false,
    children: null,
  },
];
