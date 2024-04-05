import { useParams } from "react-router-dom";
import { FormCompanies } from "./components/FormCompanies";
import { PLayouts } from "../../../layout/PLayouts";
import { FaBan } from "react-icons/fa";
import { Button, Tooltip } from "@nextui-org/react";
import { BiPlus } from "react-icons/bi";
import { MethodPaymentCompanies } from "./components/MethodPaymentCompanies";
import { AddMethodPaymentsCompanies } from "./components/AddMethodPaymentsCompanies";
import { configTaiwind } from "../../../../../utils/configTaiwind";

export const CreateCompanies = () => {
  const { id } = useParams();
  return (
    <div className={`${configTaiwind.animateView} grid sm:grid-cols-1  lg:grid-cols-6 gap-8 `}>
      <div className="col-span-full lg:col-span-2 w-full">
        <div className="flex justify-between items-center bg-white dark:bg-primaryDark shadow-xl rounded-xl  p-4">
          <PLayouts message="Metodos de pagos" />
          <AddMethodPaymentsCompanies/>
        </div>
        {/* vista de metodos de pagos registrado */}
        <MethodPaymentCompanies/>
        {/* <NotRegister /> */}
      </div>
      <div 
        className="bg-white dark:bg-primaryDark shadow-xl rounded-xl p-4 col-span-full lg:col-span-4"
        >
        <PLayouts message={id ? "Actualizar" : "Crear"} />
        <FormCompanies />
      </div>
    </div>
  );
};

const NotRegister = () => {
  return (
    <div className="flex  lg:h-[90%] mt-5 justify-center items-center">
      <div>
        <div className="mx-auto flex h-12 w-12 items-center justify-center">
          <FaBan className="w-7 h-7 lg:w-10 lg:h-10 text-gray-500" />
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <div className="mt-2">
            <p className="text-xl text-gray-500">
              No Tiene Metodos Registrados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
