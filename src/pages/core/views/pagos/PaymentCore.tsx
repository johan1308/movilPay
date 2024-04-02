import { useDispatch } from "react-redux";
import { TableLayout } from "../../layout/TableLayout";
import { BottonsPayments } from "./components/BottonsPayments";
import { CheckFilterPayments } from "./components/CheckFilterPayments";
import { TablePayment } from "./components/TablePayments";
import { AppDispatch } from "../../../../store/store";
import { useEffect } from "react";
import { PaymentsThunks } from "../../../../store/payment/thunks";
import { SinceUntilPayments } from "./components/SinceUntilPayments";
import { useAllParams } from "../../../../hooks/useAllParams";
import { PaymentParams } from "../../params/payment/paymentParams";
import moment from "moment";

const PaymentCore = () => {
  const { params } = useAllParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const param = new PaymentParams();
    params.status && (param.status = params.status);
    dispatch(PaymentsThunks(param));
  }, [params]);

  return (
    <div className="animate-fade-up">
      <TableLayout
        bottons={<BottonsPayments />}
        title="Información de los pagos"
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
              {moment(params.since).format("DD-MM-YYYY")} {" "}a{" "}
              {moment(params.until).format("DD-MM-YYYY")}
            </p>
          )}
          <TablePayment />
        </>
      </TableLayout>
    </div>
  );
};

export default PaymentCore;
