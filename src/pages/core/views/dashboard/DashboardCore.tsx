import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect } from "react";
import { DashboardThunks } from "../../../../store/dashboard/thunks";
import { DashboardParams } from "../../params/dashboard/DashboardParams";
import { configTaiwind } from "../../../../utils/configTaiwind";
import { CardInforDarshboard } from "./components/CardInforDarshboard";
import { IoIosCash } from "react-icons/io";
import { FaUserTag } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { ChartDashboard } from "./components/ChartDashboard";

import { TablePayment } from "../finances/payments/components/table/TablePayments";
import { PLayouts } from "../../layout/PLayouts";
import { ChartMethodPayments } from "./components/ChartMethodPayments";
import { SearchCompanyDashboard } from "./components/SearchCompanyDashboard";
import { ButtonsModalCompaniesDashboard } from "./components/ButtonsModalCompaniesDashboard";

const DashboardCore = () => {
  const { dashboard } = useSelector((resp: RootState) => resp.dashboard);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const params = new DashboardParams();
    const today = new Date();
    const formatter = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    params.since = formatter;
    params.until = formatter;
    dispatch(DashboardThunks(params));
  }, []);

  return (
    <div className={`${configTaiwind.animateView} dark:text-white space-y-7`}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:space-y-0 space-y-7 gap-3">
        <CardInforDarshboard
          title="Cantidad"
          Icon={<IoIosCash className="w-12 h-12" />}
        />
        <CardInforDarshboard
          title="Cliente"
          Icon={<FaUserTag className="w-12 h-12" />}
        />
        <CardInforDarshboard
          title="Acumulado"
          Icon={<FaMoneyBillTrendUp className="w-12 h-12" />}
        />
      </div>
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        <div className="col-span-full lg:col-span-2 p-4  bg-white dark:bg-primaryDark rounded-xl shadow-xl">
          <div className="flex justify-between">
          <PLayouts message="Compañías" />
          <ButtonsModalCompaniesDashboard/>
          </div>
          <SearchCompanyDashboard />
        </div>
        <div className="col-span-1 lg:col-span-5  ">
          <ChartDashboard />
        </div>
      </div>
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        <div className="lg:col-span-5 col-span-full rounded-xl bg-white dark:bg-primaryDark shadow-xl p-4 hidden lg:flex lg:flex-col">
          <PLayouts message="Compañías" />
          <TablePayment />
        </div>

        <div className="lg:col-span-2 col-span-full">
          <ChartMethodPayments />
        </div>
      </div>
    </div>
  );
};

export default DashboardCore;
