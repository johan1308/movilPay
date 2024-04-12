import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";

import { SelectItem, Select } from "@nextui-org/react";
import { useEffect } from "react";
import { MethodPaymentsThunks } from "../../../../store/payment/thunks";

export const SelectBankOrigin = () => {
  const { banks, isLoading } = useSelector((d: RootState) => d.banks);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(MethodPaymentsThunks());
  }, []);

  return (
    <div>
      <Select className="w-full" variant="bordered">
        {banks.map((bank) => (
          <SelectItem key={bank.id} value={bank.id}>
            {bank.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export const SelectBankDestiny = () => {
  const { banks, isLoading } = useSelector((d: RootState) => d.banks);
  return (
    <div>
      <Select className="w-full" variant="bordered">
        {banks.map((bank) => (
          <SelectItem key={bank.id} value={bank.id}>
            {bank.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
