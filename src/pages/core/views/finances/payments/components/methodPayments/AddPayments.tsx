import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { HiMiniPlus } from "react-icons/hi2";
import { useEffect, useMemo, useState } from "react";
import { ZelleMethod } from "./ZelleMethod";
import { TransferMethod } from "./TransferMethod";
import { MovilPayMethod } from "./MovilPayMethod";
import {
  MethodPaymentsThunks,
} from "../../../../../../../store/payment/thunks";
import { BanksThunks } from "../../../../../../../store/banks/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../../../store/store";
import { SlidePayments } from "../SlidePayments";


export const AddPayments = ({refresh}:{refresh:any}) => {
  const { methods_payments } = useSelector((d: RootState) => d.methodPayments);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [methodSelected, setMethodSelected] = useState<number | false>(false);

  const handleConsultation = () => {
    refresh()
  };

  const method = useMemo(() => {
    switch (methodSelected) {
      case 1:
        return (
          <MovilPayMethod
            setOpenSlice={setOpen}
            setHandleRefresh={handleConsultation}
          />
        );
      case 2:
        return (
          <TransferMethod
            setOpenSlice={setOpen}
            setHandleRefresh={handleConsultation}
          />
        );
      case 3:
        return (
          <ZelleMethod
            setOpenSlice={setOpen}
            setHandleRefresh={handleConsultation}
          />
        );
      case false:
        return <NoSelectedMethod />;
    }
  }, [methodSelected, open]);

  const handleClick = (method: number | string) => {
    setMethodSelected(Number(method));
    setOpen(true);
  };

  useEffect(() => {
    dispatch(MethodPaymentsThunks());
    dispatch(BanksThunks());
  }, []);

  return (
    <>
      <Dropdown backdrop="opaque">
        <DropdownTrigger>
          <Button
            color="primary"
            className="hover:text-white"
            endContent={<HiMiniPlus className="h-6 w-6" />}
          >
            Agregar Pago
          </Button>
        </DropdownTrigger>
        <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut">
          {methods_payments.map((resp) => (
            <DropdownItem key={resp.name} onClick={() => handleClick(resp.id)}>
              {resp.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <SlidePayments open={open} setOpen={setOpen}>
        {method}
      </SlidePayments>
    </>
  );
};

const NoSelectedMethod = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <p className="text-gray-400 text-xl">Selecciona un método de pago</p>
    </div>
  );
};
