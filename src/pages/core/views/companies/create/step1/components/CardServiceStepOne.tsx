import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { IoCheckmark } from "react-icons/io5";
import { useNavigate } from "react-router";

export const CardServiceStepOne = ({ product }: { product: any }) => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/companies/create/step2/')
  }
  return (
    <div className=" bg-white shadow-xl rounded-xl  dark:bg-primaryDark dark:border-gray-700">
      {/* <Image
        className="rounded-xl p-8 "
        src=""
        alt="product image"
      /> */}
      <p className="text-sm text-gray-200">{'{Imagen}'}</p>

      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-ls tracking-tight dark:text-white">
            Apple Watch Series 7
          </h3>
        </a>

        <div className="flex items-center justify-between m-5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <Button
            color="primary"
            onClick={handleClick}
            endContent={<IoCheckmark className="h-5 w-5" />}
          >
            Seleccionar
          </Button>
        </div>
      </div>
    </div>
  );
};
