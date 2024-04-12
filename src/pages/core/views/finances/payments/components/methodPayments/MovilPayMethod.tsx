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
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { getToday } from "../../../../../services/getToday";
import { Controller, useForm } from "react-hook-form";
import { CompaniesThunks } from "../../../../../../../store/companies/thunks";
import { useEffect, useState } from "react";
import { configTaiwind } from "../../../../../../../utils/configTaiwind";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";
import { classNames } from "../../../../../../../helpers/ClassN";

export const MovilPayMethod = () => {
  const { darkMode } = useThemeMovilPay();
  const dispatch = useDispatch<AppDispatch>();

  const { banks } = useSelector((d: RootState) => d.banks);
  const { companies, isLoading } = useSelector((d: RootState) => d.companies);
  const { handleSubmit, control, reset, register } = useForm();

  const [isOpen, setSetIsOpen] = useState(false);

  const getCompanies = (e: any) => {
    return dispatch(CompaniesThunks({ search: e }));
  };

  useEffect(() => {
    dispatch(CompaniesThunks());
    setTimeout(() => setSetIsOpen(true), 300);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <PLayouts
        message="Pago Movil"
        icon={<HiDevicePhoneMobile className="inline h-6 w-6 ml-2 mb-2" />}
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
                  onSelectionChange={onChange}
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
            render={({ field: { onBlur, onChange, value } }) => (
              <Select
                className="w-full"
                variant="bordered"
                size="lg"
                color="primary"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
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
              <Input
                type="date"
                variant="bordered"
                color="primary"
                size="lg"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                maxLength={6}
                max={getToday()}
                placeholder="Escribe la referencia"
                className={classNames(darkMode && "text-white", "w-full")}
              />
            )}
          />
        </div>
        <div className="col-span-full">
          <label
            htmlFor=""
            className={`${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Teléfono
          </label>
          <Controller
            name="mobile"
            control={control}
            rules={{ required: true }}
            render={({ field: { onBlur, onChange, value } }) => (
              <Input
                type="text"
                variant="bordered"
                color="primary"
                size="lg"
                onBlur={onBlur}
                maxLength={12}
                onChange={onChange}
                value={value}
                max={getToday()}
                className="w-full"
                placeholder="teléfono del pago"
              />
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
                placeholder="Introduce la descripción"
              />
            )}
          />
        </div>
        <div className="col-span-full flex justify-end">
          <Button color="primary" type="submit">
            Registrar pago
          </Button>
        </div>
      </form>
    </>
  );
};
