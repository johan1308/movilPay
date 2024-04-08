import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("*El nombre es obligatorio*"),
    email: yup
      .string()
      .email("*Debe introducir un correo valido*")
      .required("*El correo es obligatorio*"),
    description: yup.string().required("*La descripción es obligatoria*"),
    rif: yup.string().required("*El rif es obligatorio*"),
    status: yup.string().required("*Se debe colocar el Estado*"),
  })
  .required();
export const FormCompanies = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form className=" space-y-4 mt-5 " onSubmit={handleSubmit(onSubmit)}>
      {/* Nombre */}
      <div>
        <label className="font-semibold dark:text-white">Nombre</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, ref, value } }) => (
            <Input
              type="text"
              size="lg"
              onChange={onChange}
              ref={ref}
              value={value}
              variant="faded"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
              placeholder="Introduce el nombre de la  compañía"
            />
          )}
        />
      </div>
      {/* Rif */}
      <div className="grid grid-cols-6 gap-2">
        <div className="col-span-full">
          <label className="font-semibold dark:text-white">Rif</label>
        </div>
        <div className="col-span-1">
          <Input
            type="text"
            size="lg"
            variant="faded"
            className="pl-0 dark:text-white"
            readOnly
            value="J"
          />
        </div>
        <div className="col-span-5">
          <Controller
            name="rif"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, ref, value } }) => (
              <Input
                type="text"
                size="lg"
                onChange={onChange}
                ref={ref}
                value={value}
                isInvalid={!!errors.rif}
                errorMessage={errors.rif?.message}
                variant="faded"
                placeholder="ej.00000000"
              />
            )}
          />
        </div>
      </div>
      {/* Email */}
      <div>
        <label className="font-semibold dark:text-white">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, ref, value } }) => (
            <Input
              type="email"
              size="lg"
              onChange={onChange}
              ref={ref}
              value={value}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              variant="faded"
              placeholder="ej.00000000"
            />
          )}
        />
      </div>
      {/* Status */}
      <div>
        <label className="font-semibold dark:text-white">Estado</label>
        <Controller
          name="status"
          control={control}
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, ref, value } }) => (
            <RadioGroup
              orientation="horizontal"
              color="primary"
              className="mt-2"
              onChange={onChange}
              value={value}
              isInvalid={!!errors.status}
              errorMessage={errors.status?.message}
            >
              <Radio value="buenos-aires">Activo</Radio>
              <Radio value="Sydney">Inactivo</Radio>
            </RadioGroup>
          )}
        />
      </div>
      {/* Descripción */}
      <div>
        <label className="font-semibold dark:text-white">Descripción</label>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, ref, value } }) => (
            <Textarea
              placeholder="Enter your description"
              onChange={onChange}
              value={value}
              isInvalid={!!errors.description}
              errorMessage={errors.description?.message}
              size="lg"
              variant="faded"
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button color="primary" type="submit">
          Registrar compañía
        </Button>
      </div>
    </form>
  );
};
