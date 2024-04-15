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
      <div className="grid lg:grid-cols-6 gap-3 sm:grid-cols-1">
        <div className="col-span-4">
          <ChartDashboard />
        </div>

        <div className="col-span-2">
          <ChartMethodPayments />
        </div>
      </div>
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        <div className="col-span-5 rounded-xl bg-white dark:bg-primaryDark shadow-xl p-3">
          <PLayouts message="Información de pago" />
          <TablePayment />
        </div>

        <div className="col-span-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quidem magnam ratione vel a esse facere quis incidunt rem explicabo
          aspernatur cumque, laborum ipsum optio temporibus reiciendis harum
          libero est.
        </div>
      </div>
    </div>
  );
};

export default DashboardCore;
