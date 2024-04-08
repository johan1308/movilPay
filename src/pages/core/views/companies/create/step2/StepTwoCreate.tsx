import { Button } from "@nextui-org/button";
import { configTaiwind } from "../../../../../../utils/configTaiwind";
import { PLayouts } from "../../../../layout/PLayouts";
import { MethodPaymentCompanies } from "./components/MethodPaymentCompanies";
import { BiPlus } from "react-icons/bi";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { FormCompanies } from "./components/FormCompanies";
import { BreadCrumbCore } from "../../../../components/BreadCrumb/BreadCrumbCore";
import { AddMethodPaymentsCompanies } from "./components/AddMethodPaymentsCompanies";



export const StepTwoCreate = () => {
  return (
    <>
      
      <div className={configTaiwind.animateView}>
        <div className="grid gap-4 grid-cols-7">
          <div className="col-span-full lg:col-span-5 bg-white p-5 h-full dark:bg-primaryDark rounded-xl shadow-xl">
            <div className="lg:flex lg:justify-between  mr-3 space-x-3">
              <p className="font-semibold text-xl mb-2 mb-7 lg:mb-0 dark:text-white">
                {/* titulo */}
                Informacion de la compañía
              </p>
              {/* Botones */}
            </div>
            <div className=" mt-5">
              {/* Children */}
              <FormCompanies />
            </div>
          </div>
          <div className="col-span-full lg:col-span-2">
            <div className="relative flex justify-between gap-x-1 py-5 px-3 bg-white dark:bg-primaryDark shadow-xl rounded-xl ">
              <PLayouts message="Metodos de pagos" />
              
              <AddMethodPaymentsCompanies />
            </div>
            <ScrollShadow className={` h-[550px] mt-5 ${configTaiwind.scroll}`}>
              <MethodPaymentCompanies />
            </ScrollShadow>
          </div>
        </div>
      </div>
    </>
  );
};
