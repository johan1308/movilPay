import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BottonsPayments } from "./components/table/BottonsPayments";
import { CheckFilterPayments } from "./components/filters/CheckFilterPayments";
import { SinceUntilPayments } from "./components/filters/SinceUntilPayments";
import { TablePayment } from "./components/table/TablePayments";
import { PaymentParams } from "../../../params/payment/payments/paymentParams";
import { AppDispatch } from "../../../../../store/store";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { PaymentsThunks } from "../../../../../store/payment/thunks";
import { TemplateTableLayout } from "../../../layout/TemplateTableLayout";
import { BanksDestinyOriginPayments } from "./components/filters/BanksDestinyOriginPayments";
import { CompaniesFilterPayments } from "./components/filters/CompaniesFilterPayments";
import { CardInfoPayments } from '../../companies/company/components/CardInfoPayments';
import { DashboardParams } from "../../../params/dashboard/DashboardParams";
import { firstDayMonth } from "../../../services/getToday";
import moment from "moment";
import { DashboardParamsThunks, DashboardThunks } from "../../../../../store/dashboard/thunks";

const PaymentCore = () => {
  const { params, addParams, deleteParams, setSearchParams } = useAllParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleConsultation = () => {
    const param = new PaymentParams();
    params.status && (param.status = params.status);
    params.page  && (param.page = Number(params.page));
    params.since && (param.since = params.since);
    params.until && (param.until = params.until);
    params.search && (param.search = params.search);
    params.bank_origin && (param.bank_origin = params.bank_origin);
    params.bank_destiny && (param.bank_destiny = params.bank_destiny);
    
    
    dispatch(PaymentsThunks(param));
    
  };

  const handleSearch = ({ search }: any) => {
    if (search == undefined || search == null) return;

    if (search.length == 0) {
      deleteParams(["search"]);
      return;
    }
    const { page, ...rest } = params;
    setSearchParams({ ...rest, search });
  };

  const sendRequestDashboard = () => {
    const parameters = new DashboardParams();
    

    params.since
      ? (parameters.since = params.since)
      : (parameters.since = firstDayMonth());
    params.until
      ? (parameters.until = params.until)
      : (parameters.until = moment(new Date()).format("DD/MM/YYYY"));    
    // companiesId.length > 0 && (parameters.company = companiesId);
    parameters.group_by = "company_id";
    
    
    dispatch(DashboardParamsThunks(parameters));
  };
  

  useEffect(() => {
    sendRequestDashboard()
    handleConsultation();
  }, [params]);

  return (
    <div className="animate-fade-up space-y-5">
      <CardInfoPayments/>
      <TemplateTableLayout
        title="Información de los pagos"
        bottons={<BottonsPayments refresh={handleConsultation} />}
        search={handleSearch}
        filters={[
          {
            name: "",
            component: <CheckFilterPayments />,
            field: "status",
          },
          {
            name: "Introduce un rango de fecha",
            component: <SinceUntilPayments />,
            field: "since",
          },
          {
            name: "Selecciona los bancos",
            component: <BanksDestinyOriginPayments />,
            field: "banks",
          },
          {
            name: "Compañía",
            component: <CompaniesFilterPayments />,
            field: "company",
          },
        ]}
      >
        <>
          {params.since && (
            <p className="font-semibold text-xl dark:text-white text-end mt-4">
              {params.since && params.since}
              {params.until && ` – ${params.until}`}
            </p>
          )}
          <TablePayment />
        </>
      </TemplateTableLayout>
    </div>
  );
};

export default PaymentCore;
