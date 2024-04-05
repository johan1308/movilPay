import React, { lazy } from "react";
import {
  FcBriefcase,
  FcBusinessman,
  FcCollaboration,
  FcComboChart,
  FcConferenceCall,
  FcCurrencyExchange,
  FcFactory,
  FcLibrary,
  FcOrganization,
  FcPlus,
  FcSalesPerformance,
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
    name: "Compañias",
    path: "companies/",
    icon: FcFactory,
    superAdmin: false,
    children: [
      {
        name: "Registrar compañía",
        path: "companies/create/",
        icon: FcPlus,
        superAdmin: false,
        children: null,
      },
      {
        name: "Todas las compañía",
        path: "companies/",
        icon: FcOrganization,
        superAdmin: false,
        children: null,
      },
    ],
  },
  {
    name: "Finanzas",
    path: "finance/",
    icon: FcSalesPerformance,
    superAdmin: false,
    children: [
      {
        name: "Pagos",
        path: "finance/payments/",
        icon: FcCurrencyExchange,
        superAdmin: false,
        children: null,
      },
      {
        name: "Cobranzas",
        path: "finance/collections/",
        icon: FcBriefcase,
        superAdmin: false,
        children: null,
      },
    ],
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
  
];
