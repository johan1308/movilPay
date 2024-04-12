import { Button } from "@nextui-org/react";
import { HiMiniPlus, HiArrowPath } from "react-icons/hi2";
import { AddPayments } from "../methodPayments/AddPayments";

interface Props {
  refresh?: () => void;
}

export const BottonsPayments = ({ refresh }: Props) => {
  return (
    <div className="flex space-x-2">
      
      <AddPayments/>
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
