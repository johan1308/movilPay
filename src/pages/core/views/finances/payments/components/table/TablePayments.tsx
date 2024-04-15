import { useSelector } from "react-redux";

import { PaginatorPayments } from "./PaginatorPayments";

import moment from "moment";
import { TableLayout, valueType } from "../../../../../layout/TableLayout";
import { RootState } from "../../../../../../../store/store";
import { PLayouts } from "../../../../../layout/PLayouts";

const dataTable: valueType[] = [
  { name: "Compañía", value: "company_name" },
  { name: "Banco de origen", value: "bank_origin_name" },
  { name: "Banco de destino", value: "bank_destiny_name" },
  { name: "Referencia", value: "reference" },
  { name: "Metodo del pago", value: "method_name" },
  {
    name: "fecha del pago",
    value: (item: any) => {
      return moment(item.date).format("DD-MM-YYYY");
    },
  },
  {
    name: "Estado",
    value: (item: any) => {
      return (
        <span className={item.status ? "text-green-500" : "text-red-500"}>
          {item.status ? "Activo" : "Inactivo"}
        </span>
      );
    },
  },
  { name: "Monto", value: "amount" },
  {
    name: "Acción",
    value: (e: any) => {
      return <></>;
    },
  },
];

export const TablePayment = () => {
  const { payments, isLoading}: any = useSelector(
    (d:RootState) => d.payments
  );

  return (
    <>
      
      <TableLayout
        isLoading={isLoading}
        data={payments}
        columns={dataTable}
        Paginator={<PaginatorPayments />}
      />
    </>
  );
};
