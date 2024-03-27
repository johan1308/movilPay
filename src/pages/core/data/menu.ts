import {
  HiChartPie,
  HiClipboardDocumentList,
  HiBanknotes,
  HiMiniUserGroup,
} from "react-icons/hi2";
import { FaUserTag } from "react-icons/fa";

export const navigation = [
  { name: "Estadisticas", path: "dashboard/", icon: HiChartPie },
  { name: "Usuarios", path: "users/", icon: HiMiniUserGroup },
  { name: "Reportes", path: "reports/", icon: HiClipboardDocumentList },
  { name: "Clientes", path: "clients/", icon: FaUserTag },
  { name: "Cobranzas", path: "collections/", icon: HiBanknotes },
];
export const teams = [
  { id: 1, name: "Heroicons", path: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", path: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", path: "#", initial: "W", current: false },
];
