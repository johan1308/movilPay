import { IoIosCash } from "react-icons/io";
import { useThemeMovilPay } from "../../../../hooks/useTheme";
import { CardInforDarshboard } from "./components/CardInforDarshboard";
import { FaUserTag } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { ChartDashboard } from "./components/ChartDashboard";
export const DashboardCore = () => {
  return (
    <div className=" animate-fade-up dark:text-white space-y-7">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:space-y-0 space-y-7 gap-3">
        <CardInforDarshboard
          title="Cantidad"
          Icon={<IoIosCash className="w-7 h-7" />}
        />
        <CardInforDarshboard
          title="Cliente"
          Icon={<FaUserTag className="w-7 h-7" />}
        />
        <CardInforDarshboard
          title="Acumulado"
          Icon={<FaMoneyBillTrendUp className="w-7 h-7" />}
        />
      </div>
      <div>
        <ChartDashboard />
      </div>
    </div>
  );
};
