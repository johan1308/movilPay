import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { PaginatorPayments } from "./PaginatorPayments";
import { TableLayout, valueType } from "../../../layout/TableLayout";
import moment from "moment";


const dataTable: valueType[] = [
  { name: "Banco de origen", value: "bank_origin_name" },
  { name: "Banco de destino", value: "bank_destiny_name" },
  { name: "Referencia", value: "reference" },
  { name: "Metodo del pago", value: "method_name" },
  { name: "fecha del pago", value: (item: any) => {
    return moment(item.date).format('DD-MM-YYYY')
  } },
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
    name: "Accion",
    value: (e: any) => {
      return <></>;
    },
  },
];

export const TablePayment = () => {
  const { payments, isLoading }: any = useSelector<RootState>(
    (d) => d.payments
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
