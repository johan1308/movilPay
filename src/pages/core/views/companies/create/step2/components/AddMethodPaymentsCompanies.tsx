import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";

import { BiPlus } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { AppDispatch, RootState } from "../../../../../../../store/store";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";
import { MethodPaymentsThunks } from "../../../../../../../store/payment/thunks";
import { PLayouts } from "../../../../../layout/PLayouts";


export const AddMethodPaymentsCompanies = () => {
  const { methods_payments } = useSelector((d: RootState) => d.methodPayments);
  const { darkMode } = useThemeMovilPay();
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    dispatch(MethodPaymentsThunks());
  }, []);

  return (
    <>
      <Tooltip
        content="Registrar Metodo de pago"
        className=" bg-default text-white "
      >
        <Button size="sm" isIconOnly onPress={onOpen} color="primary" aria-label="Like">
          <BiPlus className="h-6 w-6" />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={darkMode ? "dark" : ""}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:text-white">
                Registro
              </ModalHeader>
              <ModalBody>
                <form>
                  <Select
                    items={methods_payments}
                    label={<PLayouts message="Metodo de pago" />}
                    placeholder="Selecciona un metodo"
                    labelPlacement="outside"
                    className="w-full"
                    size="lg"
                  >
                    {(user) => (
                      <SelectItem
                        key={user.id}
                        textValue={user.name}
                        color="primary"
                      >
                        <div className="flex gap-2 items-center">
                          <Avatar
                            alt={user.name}
                            className="flex-shrink-0"
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <span className="text-small">{user.name}</span>
                            <span className="text-tiny text-default-400">
                              {user.name}
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    )}
                  </Select>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
