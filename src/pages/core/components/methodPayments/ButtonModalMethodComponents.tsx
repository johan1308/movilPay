import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { isMobile } from "react-device-detect";
import { IoMdAdd } from "react-icons/io";
import { FormMovilPayComponents } from "./FormMovilPayComponents";
import { FormTransferComponents } from "./FormTransferComponents";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BiTransfer } from "react-icons/bi";
import { SiZelle } from "react-icons/si";

let tabs = [
  {
    id: 1,
    label: "Pago móvil",
    Icon: HiOutlineDevicePhoneMobile,
    Content: FormMovilPayComponents ,
  },
  {
    id: 2,
    label: "Transferencia",
    Icon: BiTransfer,
    Content: FormTransferComponents ,
  },
  {
    id: 3,
    label: "Zelle",
    Icon: SiZelle,
    Content: FormTransferComponents ,
  },
];

export const ButtonModalMethodComponents = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" isIconOnly size="md" onPress={onOpen}>
        <IoMdAdd className={`font-semibold h-6 w-6 `} />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={isMobile ? "full" : "md"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Tabs items={tabs} variant="bordered" color="primary">
                  {(item) => (
                    <Tab
                      key={item.id}
                      title={
                        <div className="flex items-center space-x-2">
                          <item.Icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                      }
                    >
                      <div className="flex justify-center items-center mb-5 space-x-2">
                        <p className="text-xl">{item.label}</p>
                        <item.Icon className="h-6 w-6"/>
                      </div>

                      <item.Content onClose={onClose}/>
                    </Tab>
                  )}
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
