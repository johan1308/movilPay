import { FcOrganization, FcPlus } from "react-icons/fc";

export const companiesRouters = [
  {
    name: "Registrar compañía",
    path: "companies/create/",
    icon: FcPlus,
    superAdmin: false,
    show: true,
    children: [
      {
        name: "Paso 1",
        path: "companies/create/step1/",
        icon: FcPlus,
        superAdmin: false,
        show: false,
        children: null,
      },
      {
        name: "Paso 2",
        path: "companies/create/step2/",
        icon: FcOrganization,
        superAdmin: false,
        show: false,
        children: null,
      },
      {
        name: "Paso 3",
        path: "companies/create/step3/",
        icon: FcOrganization,
        superAdmin: false,
        show: false,
        children: null,
      },
    ],
  },
  {
    name: "Todas las compañía",
    path: "companies/",
    icon: FcOrganization,
    superAdmin: false,
    show: true,
    children: null,
  },
  {
    name: "Compañía",
    path: "companies/company/",
    icon: FcPlus,
    superAdmin: false,
    show: false,
    children: false,
  },
];
