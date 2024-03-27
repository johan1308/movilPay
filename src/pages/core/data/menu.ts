import {
  HiChartPie,
  HiClipboardDocumentList,
  HiBanknotes,
  HiMiniUserGroup,
} from "react-icons/hi2";
import { FaUserTag } from "react-icons/fa";

export const navigation = [
  { name: "Estadisticas", path: "dashboard/", icon: HiChartPie },
  { name: "Reportes", path: "reports/", icon: HiClipboardDocumentList },
  { name: "Cobranzas", path: "collections/", icon: HiBanknotes },
  { name: "Clientes", path: "clients/", icon: FaUserTag },
  { name: "Usuarios", path: "users/", icon: HiMiniUserGroup },
];
export const teams = [
  { id: 1, name: "Heroicons", path: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", path: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", path: "#", initial: "W", current: false },
];
