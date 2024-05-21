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
    if (search == undefined || search == null) return;

    if (search.length == 0) {
      deleteParams(["search"]);
      return;
    }
    const { page, ...rest } = params;
    setSearchParams({ ...rest, search });
  };
  console.log(params);

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
          // {
          //   name: "Compañía",
          //   component: <CompaniesFilterPayments />,
          //   field: "company",
          // },
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
