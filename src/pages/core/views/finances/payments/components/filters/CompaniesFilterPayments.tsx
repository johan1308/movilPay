import { Button, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

import { FaTrash } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { ErrorToast } from "../../../../../../../hooks/Notifications";
import { useAllParams } from "../../../../../../../hooks/useAllParams";

export const CompaniesFilterPayments = () => {
  const { addParams, params, deleteParams, setSearchParams } = useAllParams();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: params.company,
    },
  });
  const onSubmit = ({ since, until }: any) => {
    const { page, search, ...restParams } = params;
    const payload = { ...restParams, since, until };
    console.log(payload);
    //setSearchParams(payload);
  };

  return (
    <div>
      <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
        <div>
          
          <Controller
            name="company"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="text"
                placeholder="Selecciona una compañía"
                className="mb-4 dark:text-white"
                variant="bordered"
                color="primary"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                isInvalid={!!errors.company}
                errorMessage={!!errors.company && "Introduce un dato valido"}
              />
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
    </div>
  );
};
