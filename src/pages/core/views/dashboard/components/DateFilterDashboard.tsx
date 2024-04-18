import { Controller, useForm } from "react-hook-form";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { firstDayMonth, getToday } from "../../../services/getToday";
import { Button, Input } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export const DateFilterDashboard = ({ setSearchParams }: any) => {
  const today = getToday();
  const firstDay = firstDayMonth();

  const { params, deleteParams, setSearchParams: setSearch } = useAllParams();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      since: params.since || firstDay,
      until: params.until || today,
    },
  });

  const onSubmit = ({ since, until }: any) => {
    const { page, search, ...restParams } = params;
    const payload = { ...restParams, since, until };
    setSearch(payload);
    setSearchParams(payload);
  };

  const deleteDate = (field: "since" | "until",value:string) => {
    setValue(field, value);
    deleteParams(["since", "until", "page"]);
  };
  return (
    <form
      className="flex flex-col lg:flex-row justify-end items-center lg:space-x-2 space-x-2 mb-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:w-[20rem] w-full">
        <label htmlFor="desde" className="dark:text-white">
          Desde
        </label>
        <Controller
          name="since"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="date"
              placeholder="desde"
              className="mb-4 dark:text-white"
              variant="faded"
              color="primary"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              max={today}
              size="lg"
              isInvalid={!!errors.since}
              errorMessage={!!errors.since && "Introduce un dato valido"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => deleteDate("since",firstDay)}
                >
                  <FaTrash className="text-md text-red-500 pointer-events-none " />
                </button>
              }
            />
          )}
        />
      </div>
      <div className="lg:w-[20rem] w-full">
        <label htmlFor="desde" className="dark:text-white">
          Hasta
        </label>
        <Controller
          name="until"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="date"
              placeholder="desde"
              className="mb-4 dark:text-white"
              variant="faded"
              color="primary"
              size="lg"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              max={today}
              isInvalid={!!errors.since}
              errorMessage={!!errors.until && "Introduce un dato valido"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  color="danger"
                  onClick={() => deleteDate("until",today)}
                >
                  <FaTrash className="text-md text-red-500 pointer-events-none " />
                </button>
              }
            />
          )}
        />
      </div>
      <Button
        isIconOnly
        color="primary"
        type="submit"
        className="mt-2 w-full lg:w-fit"
        endContent={<BiSearch className="w-6 h-6" />}
      ></Button>
    </form>
  );
};
