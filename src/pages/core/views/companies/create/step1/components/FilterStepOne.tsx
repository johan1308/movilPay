import { Button } from "@nextui-org/button";
import { useAllParams } from "../../../../../../../hooks/useAllParams";

export const FilterStepOne = () => {
  const { params, addParams } = useAllParams();
  const handleClick = (id: any) => {
    console.log(id);
    addParams({ service_type: id });
  };
  return (
    <div
      
      aria-labelledby="filter-heading"
      className="bg-white   rounded-xl mb-7 mt-3 shadow-xl dark:bg-primaryDark grid grid-cols-1 gap-4 "
    >
    
      <div className="relative  row-start-1 py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-1 space-x-6 px-4 text-sm ">
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
    </div>
  );
};
