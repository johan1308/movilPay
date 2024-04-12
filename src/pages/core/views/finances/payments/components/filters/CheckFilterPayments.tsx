import { Radio, RadioGroup } from "@nextui-org/react";
import { useAllParams } from "../../../../../../../hooks/useAllParams";


export const CheckFilterPayments = () => {
  const { params, setSearchParams, addParams } = useAllParams();

  const handleChanges = (e: any) => {
    const { status, page, ...rest } = params;
    if (e == "all") {
      return setSearchParams(rest);
    }
    setSearchParams({ ...rest,status: e });
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
