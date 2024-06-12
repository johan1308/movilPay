import { FcOrganization, FcPlus } from "react-icons/fc"; 

export const companiesRouters = [
  {
    name: "Registrar compañía",
    path: "companies/create/",
    icon: FcPlus,
    superAdmin: false,
    show: true,
    children:null,
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
