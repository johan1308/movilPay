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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { CompaniesThunks } from "../../../../../store/companies/thunks";
import { Loading } from "../../../../../components/Loading";
import { useEffect } from "react";
import { Company } from "../../../interfaces/CompaniesInterfaces";
import { getCookie, setCookie } from "../../../../../config/cookies";
import { ErrorToast } from "../../../../../libs/Notifications";

type ParamsSelect = {
  id: number;
  name: string;
  rif: string;
};
interface Props {
  selectCompany: (e: ParamsSelect) => void;
}

export const ButtonsModalCompaniesDashboard = ({ selectCompany }: Props) => {
  const { darkMode } = useThemeMovilPay();
  const { isLoading, companies } = useSelector((d: RootState) => d.companies);
  const { company } = useSelector((d: RootState) => d.dashCompany);
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSearch = ({ search }: any) => {
    if (search == undefined) return;
    dispatch(CompaniesThunks({ search: search }));
  };

  const handleClick = ({ id, name, rif }: Company) => {
    const match = company.some((d) => d.id == id);
    if (match) return ErrorToast("Ya esta seleccionado");
    const payload = {
      id,
      name,
      rif,
    };
    onOpenChange();
    selectCompany(payload);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(CompaniesThunks());
    }
  }, [isOpen]);

  return (
    <>
      <Tooltip content="Buscar compañía" className={`bg-gray-300`}>
        <Button onPress={onOpen} color="primary" isIconOnly>
          <BiSearch className={`font-semibold h-6 w-6 `} />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        placement="center"
        className={darkMode ? "dark" : ""}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 dark:text-white">
                Compañías
              </ModalHeader>
              <ModalBody>
                <div className="pb-10">
                  <SearchCompanies search={handleSearch} />
                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-500">
                      Resultado de la búsqueda
                    </h3>
                    <ul
                      role="list"
                      className={`mt-4 divide-y  divide-gray-200 border-b border-t border-gray-200 `}
                    >
                      {isLoading && <Loading />}
                      <ScrollShadow
                        className={`w-full h-[300px] overflow-y-auto ${configTaiwind.scroll}`}
                      >
                        {!isLoading &&
                          companies.map((company) => (
                            <li
                              key={company.id}
                              className="flex items-center justify-between space-x-3 py-4"
                            >
                              <div className="flex min-w-0 flex-1 items-center space-x-3">
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                    {company.name}
                                  </p>
                                  <p className="truncate text-sm font-medium text-gray-500">
                                    {company.rif}
                                  </p>
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                <Button
                                  type="button"
                                  color="primary"
                                  variant="light"
                                  onClick={() => handleClick(company)}
                                >
                                  {/* <PlusIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                  Seleccionar{" "}
                                </Button>
                              </div>
                            </li>
                          ))}
                      </ScrollShadow>
                    </ul>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <span className="text-gray-800 dark:text-white text-xs">
                  Se muestran los últimos 10 resultados
                </span>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
