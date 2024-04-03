import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  RadioGroup,
  Radio,
  Textarea,
} from "@nextui-org/react";
import { HiBuildingOffice2, HiMiniPlus } from "react-icons/hi2";
import { useThemeMovilPay } from "../../../../../../hooks/useTheme";
import { isMobile } from "react-device-detect";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required("*El nombre es obligatorio*"),
    email: yup
      .string()
      .email("*Debe introducir un correo valido*")
      .required("*El correo es obligatorio*"),
    description: yup.string().required("*La descripcion es obligatoria*"),
    rif: yup.string().required("*El rif es obligatorio*"),
    status: yup.string().required("*Se debe colocar el Estado*"),
    payment_methods_companies: yup.string(),
  })
  .required();

export const ModalAddCompanies = () => {
  const { darkMode } = useThemeMovilPay();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
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
    <>
      <Button
        color="primary"
        className="hover:text-white"
        endContent={<HiMiniPlus className="h-6 w-6" />}
        onPress={onOpen}
      >
        Agregar Compañía
      </Button>
      <Modal
        backdrop="blur"
        className={darkMode ? "dark" : ""}
        isOpen={isOpen}
        size={isMobile ? "full" : "2xl"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-1 dark:text-white">
                Agregar Compañía
                <HiBuildingOffice2 className="inline h-7 w-7 text-default" />
              </ModalHeader>
              <ModalBody className="dark:text-white" style={{ overflowY: "auto" }}>
                <form
                  className=" space-y-4  "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* Nombre */}
                  <div>
                    <label className="font-semibold dark:text-white">
                      Nombre
                    </label>
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
                      <label className="font-semibold dark:text-white">
                        Rif
                      </label>
                    </div>
                    <div className="col-span-1">
                      <Input
                        type="text"
                        size="lg"
                        variant="faded"
                        className="pl-0"
                        readOnly
                        value="J"
                      />
                    </div>
                    <div className="col-span-5">
                      <Controller
                        name="rif"
                        control={control}
                        rules={{ required: true }}
                        render={({
                          field: { onBlur, onChange, ref, value },
                        }) => (
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
                    <label className="font-semibold dark:text-white">
                      Email
                    </label>
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
                    <label className="font-semibold dark:text-white">
                      Estado
                    </label>
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
                          <Radio value="sydney">Inactivo</Radio>
                        </RadioGroup>
                      )}
                    />
                  </div>
                  {/* Metodo de pago */}
                  <div>
                    <label className="font-semibold dark:text-white">
                      Metodo de pago
                    </label>
                    <Controller
                      name="payment_methods_companies"
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onBlur, onChange, ref, value } }) => (
                        <Input
                          type="text"
                          size="lg"
                          variant="faded"
                          onChange={onChange}
                          value={value}
                          isInvalid={!!errors.payment_methods_companies}
                          errorMessage={
                            errors.payment_methods_companies?.message
                          }
                          placeholder="Introduce el metodo de pago"
                        />
                      )}
                    />
                  </div>
                  {/* Descripcion */}
                  <div>
                    <label className="font-semibold dark:text-white">
                      Descripcion
                    </label>
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
                  <div className="flex justify-end space-x-3">
                    <Button color="danger" variant="ghost" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" type="submit">
                      Registrar compañía
                    </Button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
