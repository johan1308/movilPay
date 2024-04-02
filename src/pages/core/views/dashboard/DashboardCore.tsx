import { IoIosCash } from "react-icons/io";
import { CardInforDarshboard } from "./components/CardInforDarshboard";
import { FaUserTag } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { ChartDashboard } from "./components/ChartDashboard";
import { ListBankDashboard } from "./components/ListBankDashboard";

 const DashboardCore = () => {
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
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <ChartDashboard />
        </div>
        <div className="bg-white dark:bg-primaryDark rounded-xl shadow-xl p-3">
          <ListBankDashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardCore