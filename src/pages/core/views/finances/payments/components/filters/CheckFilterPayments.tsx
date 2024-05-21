import { Radio, RadioGroup } from "@nextui-org/react";
import { useAllParams } from "../../../../../../../hooks/useAllParams";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";

export const CheckFilterPayments = () => {
  const { darkMode } = useThemeMovilPay();
  const { params, setSearchParams, addParams } = useAllParams();

  const handleChanges = (e: any) => {
    const { status, page, ...rest } = params;
    if (e == "all") {
      return setSearchParams(rest);
    }
    setSearchParams({ ...rest, status: e });
  };

  return (
    <RadioGroup
      label="Selecciona el estado del pago"
      onValueChange={handleChanges}
      className="text-white"
      defaultValue={params.status ? params.status : "all"}
    >
      <Radio value="all">
        <span className={darkMode ? "text-white" : ""}>Todos</span>
      </Radio>
      <Radio value="true">
        <span className={darkMode ? "text-white" : ""}>Activo</span>
      </Radio>
      <Radio value="false">
        <span className={darkMode ? "text-white" : ""}>Inactivo</span>
      </Radio>
    </RadioGroup>
  );
};
