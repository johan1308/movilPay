import { Controller, useForm } from "react-hook-form";
import { configTaiwind } from "../../../../utils/configTaiwind";
import { Button, Input } from "@nextui-org/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdAdd } from "react-icons/io";
import { keyFilterNumber } from "../../../../helpers/KeyFIlterMovilPay";

const schema = yup
  .object({
    sender: yup.string().required("Debes colocar el numero de teléfono"),
  })
  .required();

export const FormMovilPayComponents = () => {
  const { handleSubmit, control, reset,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    
    const body={
      
    }
  };
  return (
    <form
      
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="sender"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              type="text"
              label="Teléfono"
              className={configTaiwind.animateView}
              maxLength={12}
              onChange={(e) => {
                keyFilterNumber({
                  value: e,
                  onChange,
                });
              }}
              isInvalid={!!errors.sender}
              errorMessage={errors.sender?.message}
              onBlur={onBlur}
              value={value}
              placeholder="Colocar el numero"
            />
            <span></span>
          </>
        )}
      />
      <div className="flex justify-end my-5 space-x-5">
        <Button color="danger" variant="light" type="button">
          Close
        </Button>
        <Button
          color="primary"
          endContent={<IoMdAdd className="h-5 w-5" />}
          type="submit"
        >
          Agregar
        </Button>
      </div>
    </form>
  );
};
