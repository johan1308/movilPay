import { Button, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { ErrorToast } from "../../../../../hooks/Notifications";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { FaTrash } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";

export const SinceUntilPayments = () => {
  const { addParams, params, deleteParams } = useAllParams();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      since: params.since,
      until: params.until,
    },
  });
  const onSubmit = ({ since, until }: any) => {
    const formaterSince = new Date(since);
    const formaterUntil = new Date(until);

    if (formaterSince > formaterUntil) {
      return ErrorToast("El DESDE no puede ser mayor");
    }
    const payload = { since, until };
    addParams(payload);
  };

  const deleteDate = (field: "since" | "until") => {
    setValue(field, "");
    deleteParams(["since", "until"]);
  };
  return (
    <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="desde">Desde</label>
        <Controller
          name="since"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="date"
              placeholder="desde"
              className="mb-4 dark:text-white"
              variant="bordered"
              color="primary"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              isInvalid={!!errors.since}
              errorMessage={!!errors.since && "Introduce un dato valido"}
              size="lg"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => deleteDate("since")}
                >
                  <FaTrash />
                </button>
              }
            />
          )}
        />
      </div>
      <div>
        <label htmlFor="desde">Hasta</label>
        <Controller
          name="until"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="date"
              placeholder="desde"
              className="mb-4 dark:text-white"
              variant="bordered"
              color="primary"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              isInvalid={!!errors.since}
              errorMessage={!!errors.until && "Introduce un dato valido"}
              size="lg"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  color="danger"
                  onClick={() => deleteDate("until")}
                >
                  <FaTrash />
                </button>
              }
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
  );
};
