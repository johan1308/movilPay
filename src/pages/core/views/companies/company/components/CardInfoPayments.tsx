import { GrValidate } from "react-icons/gr";
import { VscDebugRestart } from "react-icons/vsc";
import { MdOutlineCancel } from "react-icons/md";
import { formatBS, formatDollar } from "../../../../../../libs/FormatAmount";
import { TbDatabaseDollar } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { useEffect, useMemo } from "react";
import { DashboardParamsThunks } from "../../../../../../store/dashboard/thunks";

export const CardInfoPayments = () => {
  const { dashboard } = useSelector((d: RootState) => d.DashboardPaymentSlice);
  

  const getAmount: any = useMemo(() => {
    // calcular total de procesados
    const totalProcessing = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.quantity;
      },
      0
    );

    // calcular total de Validadas
    const totalValidated = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.quantity_validated_transactions;
      },
      0
    );

    // calcular total de No asociadas
    const totalNotAsociated = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.quantity_unassociated_transactions;
      },
      0
    );

    // calcular total acumulado
    const totalAcumulateDolar = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.total_in_usd;
      },
      0
    );

    // calcular total acumulado
    const totalAcumulateBs = dashboard.reduce(
      (acumulador: any, elemento: any) => {
        return acumulador + elemento.total_in_bs;
      },
      0
    );

    return {
      totalProcessing,
      totalValidated,
      totalNotAsociated,
      totalAcumulateDolar,
      totalAcumulateBs,
    };
  }, [dashboard]);

  

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 lg:space-y-0 space-y-7 gap-3">
      {/* Card 1*/}
      <div className=" p-6 bg-white dark:bg-primaryDark rounded-xl shadow-md flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-zinc-700 text-2xl dark:text-titleDark font-medium flex items-center ">
            Procesadas
            <VscDebugRestart className="w-8 h-8 ml-2" />
          </div>
        </div>
        <div className="text-lime-600 text-4xl font-medium ">
          {getAmount["totalProcessing"]}
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-400 text-2xl font-medium ">
            <span className="mr-2 border-t-2 text-white dark:text-primaryDark">
              REF:
            </span>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className=" p-6 bg-white dark:bg-primaryDark rounded-xl shadow-md flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-zinc-700 text-2xl dark:text-titleDark font-medium flex items-center ">
            Validadas
            <GrValidate className="w-8 h-8 ml-2" />
          </div>
        </div>
        <div className="text-lime-600 text-4xl font-medium ">
          {getAmount["totalValidated"]}
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-400 text-2xl font-medium ">
            <span className="mr-2 border-t-2 text-white dark:text-primaryDark">
              REF:
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className=" p-6 bg-white dark:bg-primaryDark rounded-xl shadow-md flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-zinc-700 text-2xl dark:text-titleDark font-medium flex items-center ">
            No asociadas
            <MdOutlineCancel className="w-8 h-8 ml-2" />
          </div>
        </div>
        <div className="text-lime-600 text-4xl font-medium ">
          {getAmount["totalNotAsociated"]}
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-400 text-2xl font-medium ">
            <span className="mr-2 border-t-2 text-white dark:text-primaryDark">
              REF:
            </span>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className=" p-6 bg-white dark:bg-primaryDark rounded-xl shadow-md flex-col justify-start items-start gap-4 inline-flex">
        <div className="justify-center items-center gap-4 inline-flex">
          <div className="text-zinc-700 text-2xl dark:text-titleDark font-medium flex items-center ">
            Acumulado
            <TbDatabaseDollar className="w-8 h-8 ml-2" />
          </div>
        </div>
        <div className="text-lime-600 text-4xl font-medium ">
          {formatBS(
            getAmount["totalAcumulateBs"]
          )}
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-400 text-2xl font-medium ">
            <span className="mr-2 border-t-2">REF:</span>
            {formatDollar(
                getAmount["totalAcumulateDolar"]
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
