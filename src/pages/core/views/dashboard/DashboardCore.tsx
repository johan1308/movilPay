import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect, useMemo } from "react";
import { DashboardThunks } from "../../../../store/dashboard/thunks";
import { DashboardParams } from "../../params/dashboard/DashboardParams";
import { configTaiwind } from "../../../../utils/configTaiwind";
import { ChartDashboard } from "./components/ChartDashboard";
import { TablePayment } from "../finances/payments/components/table/TablePayments";
import { PLayouts } from "../../layout/PLayouts";
import { ChartMethodPayments } from "./components/ChartMethodPayments";
import { SearchCompanyDashboard } from "./components/SearchCompanyDashboard";
import { ButtonsModalCompaniesDashboard } from "./components/ButtonsModalCompaniesDashboard";
import { getCookie, setCookie } from "../../../../config/cookies";
import { setCompanyDash } from "../../../../store/dashboard/DashCompanySlice";
import { DateFilterDashboard } from "./components/DateFilterDashboard";
import { useAllParams } from "../../../../hooks/useAllParams";
import { PaymentsThunks } from "../../../../store/payment/thunks";
import { PaymentParams } from "../../params/payment/payments/paymentParams";
import { firstDayMonth, getToday } from "../../services/getToday";
import { CardInforDarshboard } from "./components/CardInforDarshboard";

const DashboardCore = () => {
  const { params } = useAllParams();
  const { company } = useSelector((d: RootState) => d.dashCompany);
  const dispatch = useDispatch<AppDispatch>();

  const SelectCompany = (company: any) => {
    const data = getCookie("companyDash");
    if (data) {
      setCookie("companyDash", [...data, company]);
      dispatch(setCompanyDash([...data, company]));
      return;
    }
    setCookie("companyDash", [company]);
    dispatch(setCompanyDash([company]));
  };

  const sendRequestDashboard = () => {
    const parameters = new DashboardParams();
    params.since
      ? (parameters.since = params.since)
      : (parameters.since = "2000-01-20");
    params.until
      ? (parameters.until = params.until)
      : (parameters.until = firstDayMonth());
    const companiesId = company.map((d) => d.id).join(",");
    companiesId.length > 0 && (parameters.company = companiesId);
    dispatch(DashboardThunks(parameters));
  };

  const sendRequestPayment = () => {
    const parametersPay = new PaymentParams();
    params.since
      ? (parametersPay.since = params.since)
      : (parametersPay.since = getToday());
    params.until
      ? (parametersPay.until = params.until)
      : (parametersPay.until = firstDayMonth());
    params.page && (parametersPay.page = Number(params.page));
    const companiesId = company.map((d) => d.id).join(",");
    companiesId.length > 0 && (parametersPay.company = companiesId);
    dispatch(PaymentsThunks(parametersPay));
  };

  const sendRequest = () => {
    // sendRequestDashboard();
    sendRequestPayment();
  };

  useEffect(() => {
    sendRequest();
  }, [company, params]);

  return (
    <div className={`${configTaiwind.animateView} dark:text-white space-y-7`}>
      <DateFilterDashboard setSearchParams={sendRequest} />
      <CardInforDarshboard />
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        <div className="col-span-full lg:col-span-2 p-4  bg-white dark:bg-primaryDark rounded-xl shadow-xl">
          <div className="flex justify-between">
            <PLayouts message="Compañías" />
            <ButtonsModalCompaniesDashboard selectCompany={SelectCompany} />
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
