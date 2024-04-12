import { Radio, RadioGroup } from "@nextui-org/react";
import { AppDispatch, RootState } from "../../../../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MethodPaymentsThunks } from "../../../../../../../store/payment/thunks";

interface Props {
  setMethod: (value: number) => void;
}
export const RadioPayments = ({ setMethod }: Props) => {
  const { methods_payments } = useSelector((d: RootState) => d.methodPayments);

  const handleRadio = (value: any) => {
    setMethod(Number(value));
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(MethodPaymentsThunks());
  }, []);

  return (
    <RadioGroup
      label="Elige el método de pago"
      orientation="horizontal"
      onValueChange={handleRadio}
    >
      {methods_payments.map((method) => (
        <Radio value={method.id.toString()} key={method.id}>
          {method.name}
        </Radio>
      ))}
    </RadioGroup>
  );
};
