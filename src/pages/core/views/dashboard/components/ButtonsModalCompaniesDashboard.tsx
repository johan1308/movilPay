import { BiSearch } from "react-icons/bi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
  ScrollShadow,
} from "@nextui-org/react";
import { SearchCompanies } from "../../companies/all/components/SearchCompanies";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { configTaiwind } from "../../../../../utils/configTaiwind";

const people = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const ButtonsModalCompaniesDashboard = () => {
  const { darkMode } = useThemeMovilPay();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Tooltip content="Buscar contratos" className={`bg-gray-300`}>
        <Button onPress={onOpen} color="primary" isIconOnly>
          <BiSearch className={`font-semibold h-6 w-6 `} />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        placement="center"
        className={darkMode?"dark":''}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:text-white">
                Compañías
              </ModalHeader>
              <ModalBody>
                <div className="pb-10">
                  <SearchCompanies search={(e) => false} />
                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-500">
                      Resultado de la búsqueda
                    </h3>
                    <ul
                      role="list"
                      className={`mt-4 divide-y divide-gray-200 border-b border-t border-gray-200 `}
                    >
                      <ScrollShadow className={`w-full h-[300px] overflow-y-auto ${configTaiwind.scroll}`}>
                        {people.map((person, personIdx) => (
                          <li
                            key={personIdx}
                            className="flex items-center justify-between space-x-3 py-4"
                          >
                            <div className="flex min-w-0 flex-1 items-center space-x-3">
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {person.name}
                                </p>
                                <p className="truncate text-sm font-medium text-gray-500">
                                  {person.role}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0">
                              <Button
                                type="button"
                                color="primary"
                                variant="light"
                              >
                                {/* <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                Seleccionar{" "}
                                <span className="sr-only font-semibold">{person.name}</span>
                              </Button>
                            </div>
                          </li>
                        ))}
                      </ScrollShadow>
                    </ul>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
