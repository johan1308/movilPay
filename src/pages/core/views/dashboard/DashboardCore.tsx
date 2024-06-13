import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect, useState } from "react";
import {
  DashboardParamsThunks,
  DashboardThunks,
} from "../../../../store/dashboard/thunks";
import { DashboardParams } from "../../params/dashboard/DashboardParams";
import { configTaiwind } from "../../../../utils/configTaiwind";
import { ChartDashboard } from "./components/ChartDashboard";
import { PLayouts } from "../../layout/PLayouts";
import { SearchCompanyDashboard } from "./components/SearchCompanyDashboard";
import { ButtonsModalCompaniesDashboard } from "./components/ButtonsModalCompaniesDashboard";
import { getCookie, setCookie } from "../../../../config/cookies";
import { setCompanyDash } from "../../../../store/dashboard/DashCompanySlice";
import { DateFilterDashboard } from "./components/DateFilterDashboard";
import { useAllParams } from "../../../../hooks/useAllParams";
import { firstDayMonth } from "../../services/getToday";
import { CardInforDarshboard } from "./components/CardInforDarshboard";
import { ChartMethodMostUsing } from "./components/ChartMethodMostUsing";

import moment from "moment";

const DashboardCore = () => {
  const [intervalId, setIntervalId] = useState(null);
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
      : (parameters.since = firstDayMonth());
    params.until
      ? (parameters.until = params.until)
      : (parameters.until = moment(new Date()).format("DD/MM/YYYY"));

    const companiesId = company.map((d) => d.id).join(",");
    companiesId.length > 0 && (parameters.company = companiesId);
    parameters.group_by = "company_id";
    dispatch(DashboardThunks(parameters));
  };

  const sendRequestDashboardPayment = async () => {
    const parameters = new DashboardParams();
    params.since = parameters.since = firstDayMonth();
    params.until = parameters.until = moment(new Date()).format("DD/MM/YYYY");
    const companiesId = company.map((d) => d.id).join(",");
    companiesId.length > 0 && (parameters.company = companiesId);
    parameters.group_by = "year,month,day,payment_method_id,payment_id";
    dispatch(DashboardParamsThunks(parameters));
  };

  //   const parametersPay = new PaymentParams();
  //   params.since
  //     ? (parametersPay.since = params.since)
  //     : (parametersPay.since = getToday());
  //   params.until
  //     ? (parametersPay.until = params.until)
  //     : (parametersPay.until = firstDayMonth());
  //   params.page && (parametersPay.page = Number(params.page));
  //   const companiesId = company.map((d) => d.id).join(",");
  //   companiesId.length > 0 && (parametersPay.company = companiesId);
  //   dispatch(PaymentsThunks(parametersPay));
  // };

  const sendRequest = () => {
    sendRequestDashboard();
    sendRequestDashboardPayment();
  };

  useEffect(() => {
    sendRequest();
    const id = setInterval(sendRequestDashboardPayment, 10000); // Enviar cada 60 segundos
    return () => {
      clearInterval(id); // Limpiar el intervalo cuando el componente se desmonte
    };
  }, [company, params]);

  return (
    <div className={`${configTaiwind.animateView} dark:text-white space-y-7`}>
      <DateFilterDashboard setSearchParams={sendRequest} />
      <CardInforDarshboard />
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        <div className="col-span-full lg:col-span-5  ">
          <ChartMethodMostUsing />
        </div>
        <div className="col-span-full lg:col-span-2 p-4  bg-white dark:bg-primaryDark rounded-xl shadow-md">
          <div className="flex justify-between">
            <PLayouts message="Compañías" />
            <ButtonsModalCompaniesDashboard selectCompany={SelectCompany} />
          </div>
          <SearchCompanyDashboard />
        </div>
      </div>
      <div className="grid lg:grid-cols-7 gap-3 sm:grid-cols-1">
        {/* <div className="lg:col-span-2 col-span-full">
          <ChartMethodPayments />
        </div> */}
        <div className="lg:col-span-full col-span-full">
          <ChartDashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardCore;
