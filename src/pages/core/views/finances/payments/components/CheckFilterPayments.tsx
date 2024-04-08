import { Radio, RadioGroup } from "@nextui-org/react";
import { useAllParams } from "../../../../../../hooks/useAllParams";


export const CheckFilterPayments = () => {
  const { params, setSearchParams, addParams } = useAllParams();

  const handleChanges = (e: any) => {
    if (e == "all") {
      const { status, page, ...rest } = params;
      return setSearchParams(rest);
    }
    addParams({ status: e });
  };

  return (
    <RadioGroup
      label="Selecciona el estado del pago"
      onValueChange={handleChanges}
      defaultValue={params.status ? params.status : "all"}
    >
      <Radio value="all">Todos</Radio>
      <Radio value="true">Activo</Radio>
      <Radio value="false">Inactivo</Radio>
    </RadioGroup>
  );
};
