import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";

import { BiPlus } from "react-icons/bi";
import { useThemeMovilPay } from "../../../../../../hooks/useTheme";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../../store/store";
import { useEffect } from "react";
import { MethodPaymentsThunks } from "../../../../../../store/payment/thunks";

export const AddMethodPaymentsCompanies = () => {
  const { darkMode } = useThemeMovilPay();
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    
  dispatch(MethodPaymentsThunks())
    
  }, [])
  
  return (
    <>
      <Tooltip
        content="Registrar Metodo de pago"
        className=" bg-default text-white "
      >
        <Button isIconOnly onPress={onOpen} color="primary" aria-label="Like">
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
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
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
