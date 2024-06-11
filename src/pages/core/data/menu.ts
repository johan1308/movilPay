import {
  FcComboChart,
  FcFactory,
  FcSalesPerformance,
  FcSettings,
  FcViewDetails,
} from "react-icons/fc";
import { financesRouters } from "../views/finances/routers/finances";
import { settingRouters } from "../views/setting/routers/settingRouters";
import { companiesRouters } from "../views/companies/routers/companiesRouters";

export const navigation = [
  {
    name: "Estadísticas",
    path: "dashboard/",
    icon: FcComboChart,
    show: true,
    children: false,
  },
  {
    name: "Compañías",
    path: "companies/",
    icon: FcFactory,
    show: true,
    children: companiesRouters
  },
  // {
  //   name: "Configuración",
  //   path: "setting/",
  //   icon: FcSettings,
  //   show: true,
  //   children: settingRouters
  // },
  {
    name: "Finanzas",
    path: "finance/",
    icon: FcSalesPerformance,
    show: true,
    children:financesRouters
  },
  // {
  //   name: "Reportes",
  //   path: "reports/",
  //   icon: FcViewDetails,
  //   show: true,
  //   children: null,
  // },
];
