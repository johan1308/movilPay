import { SelectItem, Select, Button } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { useEffect, useMemo } from "react";
import { BanksThunks } from "../../../../../../store/banks/thunks";
import { useUserMovilPay } from "../../../../../../hooks/useUserMovilPay";
import { useAllParams } from "../../../../../../hooks/useAllParams";

export const BanksDestinyOriginPayments = () => {
  const { params, setSearchParams } = useAllParams();
  const { id } = useUserMovilPay();
  const { banks, isLoading } = useSelector((d: RootState) => d.banks);
  const dispatch = useDispatch<AppDispatch>();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      bank_origin: params.bank_origin ?? "",
      bank_destiny: params.bank_destiny ?? "",
    },
  });

  const onSubmit = (data: any) => {
    const { page, search, bank_origin, bank_destiny, ...restParams } = params;
    const deleteUndefined: any = Object.fromEntries(
      Object.entries(data).filter(
        ([_, valor]) => valor !== undefined && valor !== ""
      )
    );

    const payload = { ...restParams, ...deleteUndefined };
    setSearchParams(payload);
  };

  useEffect(() => {
    dispatch(BanksThunks({ company: id }));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="dark:text-white">Banco de origen</label>
        <Controller
          name="bank_origin"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <Select
              className="w-full dark:bg-primaryDark"
              variant="bordered"
              color="primary"
              placeholder="Selecciona el banco origen"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              scrollShadowProps={{
                isEnabled: false,
              }}
            >
              {banks.map((bank) => (
                <SelectItem
                  key={bank.id}
                  value={bank.id}
                  className="dark:bg-primary dark:text-white"
                >
                  {bank.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
      <div>
        <label className="dark:text-white">Banco de destino</label>
        <Controller
          name="bank_destiny"
          control={control}
          render={({ field: { value, onBlur, onChange } }) => (
            <Select
              className="w-full "
              variant="bordered"
              color="primary"
              placeholder="Selecciona el banco destino"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              scrollShadowProps={{
                isEnabled: false,
              }}
            >
              {banks.map((bank) => (
                <SelectItem
                  key={bank.id}
                  value={bank.id}
                  className="dark:bg-primary dark:text-white"
                >
                  {bank.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
      </div>
      <Button
        className="w-full"
        color="primary"
        type="submit"
        endContent={<BiSearch className="w-5 h-5" />}
      >
        Buscar
      </Button>
    </form>
  );
};
