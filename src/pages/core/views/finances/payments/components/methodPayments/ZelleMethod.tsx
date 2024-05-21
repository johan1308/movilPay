import {
  SelectItem,
  Select,
  Autocomplete,
  AutocompleteItem,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../../store/store";
import { PLayouts } from "../../../../../layout/PLayouts";
import { HiCurrencyDollar, HiDevicePhoneMobile } from "react-icons/hi2";
import { getToday } from "../../../../../services/getToday";
import { Controller, useForm } from "react-hook-form";
import { CompaniesThunks } from "../../../../../../../store/companies/thunks";
import { useEffect, useState } from "react";
import { configTaiwind } from "../../../../../../../utils/configTaiwind";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";
import { classNames } from "../../../../../../../helpers/ClassN";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingToast } from "../../../../../../../libs/Notifications";
import { CreatePaymentThunks } from "../../../../../../../store/payment/thunks";
interface Props {
  setOpenSlice: (e?: any) => void;
  setHandleRefresh: () => void;
}

const schema = yup
  .object({
    company: yup.number().required("*Este campo es obligatorio*"),
    bank_origin: yup.string().required("*Este campo es obligatorio*"),
    bank_destiny: yup.string().required("*Este campo es obligatorio*"),
    date: yup.string().required("*Este campo es obligatorio*"),
    reference: yup.string().required("*Este campo es obligatorio*"),
    sender: yup.string().required("*Este campo es obligatorio*"),
    amount: yup.string().required("*Este campo es obligatorio*"),
    description: yup.string().required("*Este campo es obligatorio*"),
  })
  .required();

export const ZelleMethod = ({ setOpenSlice, setHandleRefresh }: Props) => {
  const { darkMode } = useThemeMovilPay();
  const dispatch = useDispatch<AppDispatch>();

  const { banks } = useSelector((d: RootState) => d.banks);
  const { companies, isLoading } = useSelector((d: RootState) => d.companies);
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isOpen, setSetIsOpen] = useState(false);
  const [onclick, setOnclick] = useState(false);
  const getCompanies = (e: any) => {
    return dispatch(CompaniesThunks({ search: e }));
  };

  const handleSelected = (e: any) => {
    const data = [...companies];

    const find = data.find((d: any) => d.id == e);
    const devolver = !find ? 0 : find.id;
    setValue("company", devolver);
  };

  useEffect(() => {
    dispatch(CompaniesThunks());
    setTimeout(() => setSetIsOpen(true), 300);
  }, []);

  const onSubmit = (data: any) => {
    setOnclick(true);
    const { success } = LoadingToast();
    const body = {
      method: 3,
      ...data,
    };
    CreatePaymentThunks(body).then((result) => {
      setOnclick(false);
      success("Transferencia registrada registrado con éxito");
      setHandleRefresh();
      setOpenSlice(false);
    });
  };

  return (
    <>
      <PLayouts
        message="Zelle"
        icon={<HiCurrencyDollar className="inline h-6 w-6 ml-2 mb-2" />}
      />

      <form
        className="grid grid-cols-2 gap-2 space-y-6 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-full">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Compañía
          </label>
          {isOpen && (
            <Controller
              name="company"
              control={control}
              rules={{ required: true }}
              render={({ field: { onBlur, onChange, value } }) => (
                <Autocomplete
                  isLoading={isLoading}
                  onFocus={(e) => e.preventDefault()}
                  defaultItems={companies}
                  placeholder="Escribe para buscar"
                  variant="bordered"
                  size="lg"
                  className={configTaiwind.animateViewFade}
                  color="primary"
                  onInputChange={getCompanies}
                  onSelectionChange={(e) => handleSelected(e)}
                  isInvalid={!!errors.company}
                  errorMessage={errors.company?.message}
                  value={value}
                  popoverProps={{
                    defaultOpen: false,
                  }}
                >
                  {(item) => (
                    <AutocompleteItem
                      key={item.id}
                      className="capitalize"
                      value={item.id}
                    >
                      {item.name}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
          )}
        </div>
        <div className="col-span-full ">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Enviante
          </label>
          <Controller
            name="sender"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <>
                <Input
                  type="text"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  max={getToday()}
                  isInvalid={!!errors.sender}
                  errorMessage={errors.sender?.message}
                  placeholder="Escribe la referencia"
                  className={classNames(darkMode && "text-white", "w-full")}
                />
              </>
            )}
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Banco origen
          </label>
          <Controller
            name="bank_origin"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <Select
                className="w-full"
                variant="bordered"
                size="lg"
                color="primary"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isInvalid={!!errors.bank_origin}
                errorMessage={errors.bank_origin?.message}
                placeholder="Selecciona un banco"
                scrollShadowProps={{
                  isEnabled: false,
                }}
              >
                {banks.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Banco destino
          </label>
          <Controller
            name="bank_destiny"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                className="w-full"
                variant="bordered"
                size="lg"
                color="primary"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                isInvalid={!!errors.bank_destiny}
                errorMessage={errors.bank_destiny?.message}
                placeholder="Selecciona un banco"
                scrollShadowProps={{
                  isEnabled: false,
                }}
              >
                {banks.map((company) => (
                  <SelectItem key={company.id} value={company.id}>
                    {company.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Fecha
          </label>
          <Controller
            name="date"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                type="date"
                variant="bordered"
                color="primary"
                size="lg"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                max={getToday()}
                isInvalid={!!errors.date}
                errorMessage={errors.date?.message}
                placeholder="Introduce una fecha"
                className={classNames(darkMode && "text-white", "w-full")}
              />
            )}
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Referencia
          </label>
          <Controller
            name="reference"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <>
                <Input
                  type="text"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  maxLength={6}
                  max={getToday()}
                  isInvalid={!!errors.reference}
                  errorMessage={errors.reference?.message}
                  placeholder="Escribe el nombre del enviante"
                  className={classNames(darkMode && "text-white", "w-full")}
                />
                <span className="text-xs text-gray-400">
                  Coloca los últimos 6 dígitos
                </span>
              </>
            )}
          />
        </div>
        <div className="col-span-full">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Monto
          </label>
          <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                type="text"
                variant="bordered"
                color="primary"
                size="lg"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                max={getToday()}
                maxLength={10}
                isInvalid={!!errors.amount}
                errorMessage={errors.amount?.message}
                className="w-full"
                placeholder="Monto del pago"
              />
            )}
          />
        </div>
        <div className="col-span-full">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Descripción
          </label>
          <Controller
            name="description"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Textarea
                className="w-full"
                color="primary"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                variant="bordered"
                isInvalid={!!errors.description}
                errorMessage={errors.description?.message}
                placeholder="Introduce la descripción"
              />
            )}
          />
        </div>
        <div className="col-span-full flex justify-end">
          <Button color="primary" type="submit" disabled={onclick}>
            Registrar pago
          </Button>
        </div>
      </form>
    </>
  );
};
