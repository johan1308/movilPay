import { Radio, RadioGroup } from "@nextui-org/react";
import { useParams, useSearchParams } from "react-router-dom";
import { useAllParams } from "../../../../../hooks/useAllParams";

export const CheckFilterPayments = () => {
  const { params, setSearchParams } = useAllParams();

  const handleChanges = (e: any) => {
    if (e == "all") {
      const { status, ...rest } = params;
      return setSearchParams(rest);
    }
    setSearchParams({ ...params, status: e });
  };

  return (
    <RadioGroup
      label="Selecciona el estado del pago"
      onValueChange={handleChanges}
      defaultValue={params.status}
    >
      <Radio value="all">Todos</Radio>
      <Radio value="true">Activo</Radio>
      <Radio value="false">Inactivo</Radio>
    </RadioGroup>
  );
};
