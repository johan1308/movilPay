import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import moment from "moment";

type valueType = string | React.ReactNode;

interface Props {
  columns: any;
  data: any;
  value?: Array<valueType>;
  Paginator?: React.ReactNode;
  isLoading: boolean;
}

export const TableLayout = ({ columns, data, Paginator, isLoading }: Props) => {
  const setValueTableCell = (item: any) => {
    console.log(item);

    return (
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
        <TableCell className=" my-4 dark:text-white">{item.amount}</TableCell>
        <TableCell>{""}</TableCell>
      </TableRow>
    );
  };
  return (
    <Table
      radius="none"
      shadow="none"
      fullWidth
      aria-label="Example static collection table"
      bottomContent={Paginator}
    >
      <TableHeader>
        {columns.map((column: string) => (
          <TableColumn className="text-md">{column}</TableColumn>
        ))}
      </TableHeader>
      <TableBody
        items={data}
        isLoading={isLoading}
        loadingContent={
          <>
            <div className="bg-white dark:bg-primaryDark   dark:opacity-90 opacity-90 h-full w-full flex justify-center items-center">
              {/* <Loading /> */}
            </div>
          </>
        }
        emptyContent={"No hay pagos"}
      >
        {(item: any) => setValueTableCell(item)}
      </TableBody>
    </Table>
  );
};
