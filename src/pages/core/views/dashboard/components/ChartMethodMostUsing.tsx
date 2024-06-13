import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { formatBS, formatDollar } from "../../../../../libs/FormatAmount";

export const ChartMethodMostUsing = () => {
  const { dashboard, isLoading } = useSelector((d: RootState) => d.dashboard);

  const items = useMemo(() => {
    const desc = [...dashboard]
      .sort((d, a) => d.quantity - a.quantity)
      .reverse();
    return desc.slice(0, 10);
  }, [dashboard]);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-md dark:bg-primaryDark mx-auto">
      <p className=" font-semibold ml-7 text-2xl mb-5">
        Cantidad de transacciones
      </p>
      <div className="p-5 ">
        <Table
          aria-label="Example table with client side pagination"
          radius="none"
          shadow="none"
          removeWrapper={false}
          
    
        >
          <TableHeader>
            <TableColumn key="company">COMPAÑÍA</TableColumn>
            <TableColumn key="quantity">CANTIDAD</TableColumn>
            <TableColumn key="total_in_bs">TOTAL BOLIVARES</TableColumn>
            <TableColumn key="total_in_usd">TOTAL DOLARES</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.company_id}>
                <TableCell>{item.company}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{formatBS(item.total_in_bs)}</TableCell>
                <TableCell>{formatDollar(item.total_in_usd)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <p className="text-sm mt-5 text-gray-400 dark:text-titleDark">
          Por defecto se mostrara las 10 compañía que mas cantidad de
          transacciones posee
        </p>
      </div>
    </div>
  );
};
