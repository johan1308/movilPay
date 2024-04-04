import { Button } from "@nextui-org/react";
import { HiArrowPath, HiMiniPlus } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/store";
import { useEffect } from "react";
import { MethodPaymentsThunks } from "../../../../../../store/payment/thunks";
import { useNavigate } from "react-router-dom";

interface Props {
  refresh?: () => void;
}
export const ButtonsCompanies = ({ refresh }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(MethodPaymentsThunks());
  }, []);

  return (
    <div className="flex space-x-2">
      <Button
        color="primary"
        className="hover:text-white"
        endContent={<HiMiniPlus className="h-6 w-6" />}
        onClick={()=>navigate('/companies/create/')}
      >
        Registrar Compañía
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
