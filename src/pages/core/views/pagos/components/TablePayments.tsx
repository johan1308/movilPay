import { TableRow, TableCell } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { PaginatorPayments } from "./PaginatorPayments";
import { TableLayout } from "../../../layout/TableLayout";

export const TablePayment = () => {
  const { payments, isLoading }: any = useSelector<RootState>(
    (d) => d.payments
  );

  return (
    <>
      <TableLayout
        isLoading={isLoading}
        data={payments}
        columns={[
          "Banco de origen",
          "Banco de destino",
          "Metodo del pago",
          "fecha del pago",
          "Estado",
          "Monto",
          "Accion",
        ]}
        
        Paginator={<PaginatorPayments />}
      />
    </>
  );
};
