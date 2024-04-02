import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Loading } from "../../../../../components/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { Payment } from "../../../interfaces/PaymentInterfaces";
import moment from "moment";

export const TablePayment = () => {
  const { payments, isLoading }: any = useSelector<RootState>(
    (d) => d.payments
  );

  return (
    <Table
      radius="none"
      shadow="none"
      fullWidth
      aria-label="Example static collection table"
      bottomContent={<TablePayment />}
    >
      <TableHeader>
        <TableColumn className="text-md">Banco de origen</TableColumn>
        <TableColumn className="text-md">Banco de destino</TableColumn>
        <TableColumn className="text-md">Metodo de pago</TableColumn>
        <TableColumn className="text-md">Fecha del pago</TableColumn>
        <TableColumn className="text-md">Estado</TableColumn>
        <TableColumn className="text-md">Monto</TableColumn>
        <TableColumn className="text-md">Accion</TableColumn>
      </TableHeader>
      <TableBody
        items={payments}
        isLoading={isLoading}
        loadingContent={<Loading />}
        emptyContent={"No hay pagos"}
      >
        {(item: Payment) => (
          <TableRow key={item.id}>
            <TableCell className="my-4 dark:text-white">
              {item.bank_origin_name}
            </TableCell>
            <TableCell className="my-4 dark:text-white">
              {item.bank_destiny_name}
            </TableCell>
            <TableCell className="my-4 dark:text-white">
              {item.method_name}
            </TableCell>
            <TableCell className="my-4 dark:text-white">
              {moment(item.date).format("DD-MM-YYYY")}
            </TableCell>
            <TableCell className="my-4 dark:text-white">
              <span className={item.status ? "text-green-500" : "text-red-500"}>
                {item.status ? "Activo" : "Inactivo"}
              </span>
            </TableCell>
            <TableCell className=" my-4 dark:text-white">
              {item.amount}
            </TableCell>
            <TableCell>{""}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
