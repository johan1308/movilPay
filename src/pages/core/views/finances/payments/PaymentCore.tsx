import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BottonsPayments } from "./components/table/BottonsPayments";
import { CheckFilterPayments } from "./components/filters/CheckFilterPayments";
import { SinceUntilPayments } from "./components/filters/SinceUntilPayments";
import { TablePayment } from "./components/table/TablePayments";

import moment from "moment";
import { PaymentParams } from "../../../params/payment/payments/paymentParams";
import { AppDispatch } from "../../../../../store/store";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { PaymentsThunks } from "../../../../../store/payment/thunks";
import { TemplateTableLayout } from "../../../layout/TemplateTableLayout";
import { BanksDestinyOriginPayments } from "./components/filters/BanksDestinyOriginPayments";
import { ChartPiePayments } from "./components/ChartPiePayments";
import { CompaniesFilterPayments } from "./components/filters/CompaniesFilterPayments";

const PaymentCore = () => {
  const { params, addParams, deleteParams, setSearchParams } = useAllParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleConsultation = () => {
    const param = new PaymentParams();

    params.status && (param.status = params.status);
    params.page && (param.page = Number(params.page));
    params.since && (param.since = params.since);
    params.until && (param.until = params.until);
    params.search && (param.search = params.search);
    params.bank_origin && (param.bank_origin = params.bank_origin);
    params.bank_destiny && (param.bank_destiny = params.bank_destiny);
    dispatch(PaymentsThunks(param));
  };

  const handleSearch = ({ search }: any) => {
    if (search == undefined ||search == null ) return
    
    if (search.length == 0) {
      deleteParams(["search"]);
      return;
    }
    const { page, ...rest } = params;
    setSearchParams({ ...rest, search });
  };

  useEffect(() => {
    handleConsultation();
  }, [params]);

  return (
    <div className="animate-fade-up space-y-5">
      <TemplateTableLayout
        title="Información de los pagos"
        bottons={<BottonsPayments refresh={handleConsultation} />}
        search={handleSearch}
        filters={[
          {
            name: "Estado",
            component: <CheckFilterPayments />,
            field: "status",
          },
          {
            name: "Fecha",
            component: <SinceUntilPayments />,
            field: "since",
          },
          {
            name: "Bancos",
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
            <p className="font-semibold text-xl dark:text-white text-end mt-10">
              {moment(params.since).format("DD-MM-YYYY")} a{" "}
              {moment(params.until).format("DD-MM-YYYY")}
            </p>
          )}
          <TablePayment />
        </>
      </TemplateTableLayout>
    </div>
  );
};

export default PaymentCore;
