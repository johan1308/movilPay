import { FaUserTag } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { TbMoneybag } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { formatBS, formatDollar } from "../../../../../libs/FormatAmount";

interface arrayState {
  Icon?: React.ReactNode | JSX.Element;
  color?: string;
  data: string;
  title?: string;
}

interface responseTotal {
  totalQuantity: number | string;
  nameUnique: Set<unknown>;
  totalAccumulated: number | string;
}

const initialState: arrayState[] = [
  {
    title: "Cantidad",
    Icon: <GrMoney className="w-8 h-8 ml-2 " />,
    data: "totalQuantity",
  },
  {
    title: "Cliente",
    Icon: <LuUser2 className="w-8 h-8 ml-2 " />,
    data: "nameUnique",
  },
  {
    title: "Acumulado",
    Icon: <TbMoneybag className="w-8 h-8 ml-2" />,
    data: "totalAccumulated",
  },
];

export const CardInforDarshboard = () => {
  const { darkMode } = useThemeMovilPay();
  const { dashboard } = useSelector((d: RootState) => d.dashboard);
  console.log(dashboard);

  const getAmount: any = useMemo(() => {
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
    const totalAccumulated = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.total;
      },
      0
    );

    const ttA = `${totalAccumulated}$`;

    return {
      totalQuantity,
      nameUnique: nameUnique.size,
      totalAccumulated,
    };
  }, [dashboard]);

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:space-y-0 space-y-7 gap-3">
      {initialState.map((resp, i) => (
        <div
          key={i}
          className=" p-6 bg-white rounded-xl shadow-md flex-col justify-start items-start gap-4 inline-flex"
        >
          <div className="justify-center items-center gap-4 inline-flex">
            <div className="text-zinc-700 text-2xl font-medium flex items-center ">
              {resp.title}
              {resp.Icon}
            </div>
          </div>
          <div className="text-lime-600 text-4xl font-medium ">
            {formatBS(getAmount[resp.data])}
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-400 text-2xl font-medium ">
              <span className="mr-2 border-t-2">REF:</span>
              {formatDollar(getAmount[resp.data])}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
