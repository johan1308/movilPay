import { IoIosCash } from "react-icons/io";
import { FaUserTag } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";

interface arrayState {
  Icon?: React.ReactNode | JSX.Element;
  color?: string;
  data:string
  title?: string;
}


interface responseTotal  {
  totalQuantity: number|string;
  nameUnique: Set<unknown>;
  totalAccumulated: number|string;
}

const initialState: arrayState[] = [
  {
    title: "Cantidad",
    Icon: <IoIosCash className="w-12 h-12" />,
    data: 'totalQuantity',
  },
  {
    title: "Cliente",
    Icon: <FaUserTag className="w-12 h-12" />,
    data: "nameUnique",
  },
  {
    title: "Acumulado",
    Icon: <FaMoneyBillTrendUp className="w-12 h-12" />,
    data: "totalAccumulated",
  },
];

export const CardInforDarshboard = () => {
  const { darkMode } = useThemeMovilPay();
  const { dashboard } = useSelector((d: RootState) => d.dashboard);
  

  const getAmount:any = useMemo(() => {
    // calcular total de transacciones
    const totalQuantity = dashboard.reduce((acumulador: any, elemento: any) => {
      return acumulador + elemento.quantity;
    }, 0);

    // calcular total de clientes
    const nameUnique = new Set();
    dashboard.forEach((element) => {
      nameUnique.add(element.commpany);
    });

    // calcular total acumulado
    const totalAccumulated = dashboard.reduce((acumulador: any, elemento: any) => {
      return acumulador + elemento.total;
    }, 0);
    const ttA =`${totalAccumulated}$`
    
    
    
    return {
      totalQuantity,
      nameUnique:nameUnique.size,
      totalAccumulated:ttA
    };
  }, [dashboard]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:space-y-0 space-y-7 gap-3">
      {initialState.map((resp) => (
        <div className=" w-full bg-white rounded-lg shadow dark:bg-primaryDark shadow-xl p-4 md:p-6">
          <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
            <dl>
              <dt className="text-base font-semibold text-gray-500 dark:text-gray-400 pb-1">
                {resp.title}
              </dt>
              <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">
                {getAmount[resp.data] }
              </dd>
            </dl>
            <div>
              <span className=" text-gray-400 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md  dark:text-white">
                {resp.Icon}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
