import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { useEffect, useMemo } from "react";
import { BanksThunks } from "../../../../../store/banks/thunks";
import { Banks } from "../../../interfaces/BanksInterfaces";
import { LiBankDashboard } from "./LiBankDashboard";
import { Loading } from "../../../../../components/Loading";

export const ListBankDashboard = () => {
  const { isLoading, banks }: any = useSelector<RootState>(
    (d) => d.bankDashboard
  );
  
  const dispatch = useDispatch<AppDispatch>();

  const banksAssociate = useMemo(()=>{
    return banks.slice(0,8)
  },[banks])

  useEffect(() => {
    dispatch(BanksThunks());
  }, []);

  return (
    <>
      <p className=" font-semibold ml-2 text-2xl">Bancos asociados</p>
      {banksAssociate.length >= 8 && (
        <p className=" ml-2 text-sm mb-2 text-gray-400">
          Ultimos 8 registrados
        </p>
      )}

      {banksAssociate.length == 0 ? (
        <div className="flex h-full items-center justify-center">
          {isLoading ? (
            <Loading />
          ) : (
            <p className="text-tertiary font-semibold text-lg">
              No hay Bancos asociados
            </p>
          )}
        </div>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {banksAssociate.map((bank: Banks) => (
            <LiBankDashboard key={bank.id} bank={bank} />
          ))}
        </ul>
      )}
    </>
  );
};
