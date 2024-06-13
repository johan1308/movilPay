import { Button, Input, Textarea } from "@nextui-org/react";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PLayouts } from "../../../../layout/PLayouts";

export const FormCreateCompany = () => {
  return (
    <form action="#" method="POST">
      <PLayouts message="Datos de la compañía" />
      <div className="shadow-md overflow-hidden rounded-xl mt-3">
        <div className="bg-white dark:bg-primaryDark   p-4">
          <div className="mt-3 grid grid-cols-4 gap-6">
            <div className="col-span-full">
              <Input
                type="text"
                label="Nombre"
                variant="faded"
                placeholder="Introduce el nombre de la compañía"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <Input
                type="text"
                label="RIF"
                variant="faded"
                placeholder="Introduce el RIF"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <Input type="text" label="Website" variant="faded" />
            </div>

            <div className="col-span-full">
              <Textarea
                label="Description"
                placeholder="Enter your description"
                className=""
                variant="faded"
              />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-primaryDark px-4 py-3 text-right sm:px-6 pb-7">
          <Button
            color="primary"
            endContent={<HiMiniPencilSquare className="h-5 w-5" />}
          >
            Registrar
          </Button>
        </div>
      </div>
    </form>
  );
};
