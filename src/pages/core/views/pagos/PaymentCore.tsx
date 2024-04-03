import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAllParams } from "../../../../hooks/useAllParams";
import { AppDispatch } from "../../../../store/store";
import { TemplateTableLayout } from "../../layout/TemplateTableLayout";
import { BottonsPayments } from "./components/BottonsPayments";
import { CheckFilterPayments } from "./components/CheckFilterPayments";
import { SinceUntilPayments } from "./components/SinceUntilPayments";
import { TablePayment } from "./components/TablePayments";
import { PaymentParams } from "../../params/payment/payments/paymentParams";
import { PaymentsThunks } from "../../../../store/payment/thunks";
import moment from "moment";

const PaymentCore = () => {
  const { params, addParams, deleteParams } = useAllParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleConsultation = () => {
    const param = new PaymentParams();

    params.status && (param.status = params.status);
    params.page && (param.page = Number(params.page));
    params.since && (param.since = params.since);
    params.until && (param.until = params.until);
    params.search && (param.search = params.search);
    dispatch(PaymentsThunks(param));
  };

  const handleSearch = ({ search }: any) => {
    if (search.length == 0) {
      deleteParams(["search"]);
      return;
    }
    addParams({ search });
  };

  useEffect(() => {
    handleConsultation();
  }, [params]);

  return (
    <div className="animate-fade-up">
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
