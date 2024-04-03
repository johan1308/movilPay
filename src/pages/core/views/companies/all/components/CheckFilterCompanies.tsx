import { Radio, RadioGroup } from "@nextui-org/react";
import { useAllParams } from "../../../../../../hooks/useAllParams";

export const CheckFilterCompanies = () => {
  const { params, setSearchParams, addParams } = useAllParams();

  const handleChanges = (e: any) => {
    if (e == "all") {
      const { status, page,...rest } = params;
      return setSearchParams(rest);
    }
    addParams({ status: e });
  };

  return (
    <RadioGroup
      label="Estado del la compañía"
      onValueChange={handleChanges}
      defaultValue={params.status ? params.status : "all"}
    >
      <Radio value="all">Todos</Radio>
      <Radio value="1">Activo</Radio>
      <Radio value="2">Inactivo</Radio>
    </RadioGroup>
  );
};
