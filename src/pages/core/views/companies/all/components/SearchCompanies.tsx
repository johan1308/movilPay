import { Controller, useForm } from "react-hook-form";
import { useAllParams } from "../../../../../../hooks/useAllParams";
import { PLayouts } from "../../../../layout/PLayouts";
import { Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";

export const SearchCompanies = ({ search }: { search: (e: any) => void }) => {
  const { params } = useAllParams();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      search: params.search,
    },
  });

  const onSubmit = (data: any) => {
    search(data);
  };
  return (
    <>
      <PLayouts message="Buscador" />
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <h2 className="mt-2 text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Todas las compañía registradas
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              type="text"
              placeholder="Introduce para buscar"
              className="my-4 dark:text-white"
              variant="bordered"
              color="primary"
              size="lg"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              endContent={
                <button className="focus:outline-none" type="submit">
                  <BiSearch className="text-2xl text-default-400 pointer-events-none " />
                </button>
              }
            />
          )}
        />
      </form>
    </>
  );
};
