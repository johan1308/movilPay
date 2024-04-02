import { Button } from "@nextui-org/react";
import { HiMiniPlus, HiArrowPath } from "react-icons/hi2";

interface Props {
  refresh?: () => void;
}

export const BottonsPayments = ({ refresh }: Props) => {
  return (
    <div className="flex space-x-2">
      <Button
        color="primary"
        className="hover:text-white"
        endContent={<HiMiniPlus className="h-6 w-6" />}
      >
        Agregar Pago
      </Button>
      <Button
        variant="ghost"
        className="dark:text-white"
        endContent={<HiArrowPath className="h-6 w-6" />}
        onClick={refresh}
      >
        Recargar
      </Button>
    </div>
  );
};
