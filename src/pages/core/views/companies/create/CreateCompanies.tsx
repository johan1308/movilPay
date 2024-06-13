import { Button } from "@nextui-org/react";
import { PLayouts } from "../../../layout/PLayouts";
import { BiSearch } from "react-icons/bi";
import { FormCreateCompany } from "./components/FormCreateCompany";
import { TableMethodCreate } from "./components/TableMethodCreate";
import { ButtonModalMethodComponents } from "../../../components/methodPayments/ButtonModalMethodComponents";



export const CreateCompanies = () => {

  return (
    <>
      <main className="lg:grid lg:grid-cols-2 lg:gap-3">
        <section aria-labelledby="payment-details-heading">
          <FormCreateCompany/>
        </section>

        <section
          aria-labelledby="billing-history-heading"
          className="lg:mt-0 mt-10"
        >
          <div className="flex justify-between items-center mb-5">
            <PLayouts message="Método de pago" />
            <div>
              <ButtonModalMethodComponents />
            </div>
          </div>
          <div className="bg-white  dark:bg-primaryDark shadow-md overflow-hidden rounded-xl ">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <div className="overflow-hidden ">
                    <TableMethodCreate/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
