import { Disclosure } from "@headlessui/react";
import { Button } from "@nextui-org/button";
import { useAllParams } from "../../../../../../../hooks/useAllParams";

export const FilterStepOne = () => {
  const { params, addParams } = useAllParams();
  const handleClick = (id: any) => {
    console.log(id);
    addParams({ service_type: id });
  };
  return (
    <Disclosure
      as="section"
      aria-labelledby="filter-heading"
      className="grid grid-cols-1 gap-4 border-t border-gray-200 dark:border-gray-700"
    >
      <h2 id="filter-heading" className="sr-only">
        Filters
      </h2>
      <div className="relative  row-start-1 py-4 ">
        <div className=" space-x-6 px-4 text-sm ">
          {["1", "2", "3", "4", "5"].map((resp) => (
            <Button
              key={resp}
              color="primary"
              variant={params.service_type == resp ? "solid" : "light"}
              onClick={() => handleClick(resp)}
            >
              Ghost{resp}
            </Button>
          ))}
        </div>
      </div>
      <div className=" row-start-1 py-4">
        <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
          {/* Sort */}
        </div>
      </div>
    </Disclosure>
  );
};
