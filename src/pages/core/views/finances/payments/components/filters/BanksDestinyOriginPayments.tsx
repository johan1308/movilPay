import { SelectItem, Select } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../../store/store";
import { useEffect } from "react";
import { BanksThunks } from "../../../../../../../store/banks/thunks";
import { useUserMovilPay } from "../../../../../../../hooks/useUserMovilPay";
import { useAllParams } from "../../../../../../../hooks/useAllParams";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";

export const BanksDestinyOriginPayments = () => {
  const { params, setSearchParams } = useAllParams();
  const { darkMode } = useThemeMovilPay();
  const { id } = useUserMovilPay();
  const { banks } = useSelector((d: RootState) => d.banks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(BanksThunks({ company: id }));
  }, []);

  const origin = ({ target: { value } }: any) => {
    const { page, search, bank_origin, bank_destiny, ...restParams } = params;

    if (!value) {
      const payload = { ...restParams };
      return setSearchParams(payload);
    }

    const payload = { ...restParams, bank_origin: value };
    setSearchParams(payload);
  };
  const destiny = ({ target: { value } }: any) => {
    const { page, search, bank_destiny, ...restParams } = params;
    if (!value) {
      const payload = { ...restParams };
      return setSearchParams(payload);
    }

    const payload = { ...restParams, bank_destiny: value };

    setSearchParams(payload);
  };

  return (
    <div className="space-y-3">
      <div>
        <label className={`${darkMode && "text-white"} `}>
          Banco de origen
        </label>
        <Select
          className="w-full text-white"
          variant="bordered"
          color="primary"
          onChange={origin}
          
          defaultSelectedKeys={params.bank_origin ?? null}
          placeholder="Selecciona el banco origen"
          scrollShadowProps={{
            isEnabled: false,
          }}
        >
          {banks.map((bank) => (
            <SelectItem key={bank.id} value={bank.id}>
              {bank.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <label className={`${darkMode && "text-white"} `}>
          Banco de destino
        </label>
        <Select
          className="w-full "
          variant="bordered"
          color="primary"
          onChange={destiny}
          defaultSelectedKeys={params.bank_destiny ?? null}
          placeholder="Selecciona el banco destino"
          scrollShadowProps={{
            isEnabled: false,
          }}
        >
          {banks.map((bank) => (
            <SelectItem
              key={bank.id}
              value={bank.id}
              className={` dark:bg-primary dark:text-white`}
            >
              {bank.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
