import { Button, ScrollShadow, Tooltip } from "@nextui-org/react";
import { configTaiwind } from "../../../../../../utils/configTaiwind";
import { FaBuildingUser } from "react-icons/fa6";

import { FaInfo } from "react-icons/fa";
import { IoBanOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { useAllParams } from "../../../../../../hooks/useAllParams";
import { useNavigate } from "react-router-dom";

export const ResultsSearchCompanies = () => {
  const { addParams } = useAllParams();
  const { companies } = useSelector((d: RootState) => d.companies);
  const navigate = useNavigate();

  const handleButton = (id: number) => {
    // addParams({ contract: id });
    navigate(`/companies/company/${id}/`);
  };
  return (
    <>
      <ul
        role="list"
        className="space-y-2 border-t border-gray-200 dark:border-gray-600 "
      >
        {companies.length == 0 ? (
          <ResultEmptyCompanies />
        ) : (
          <ScrollShadow className={`h-[400px] ${configTaiwind.scroll}`}>
            {companies.map((company) => (
              <li
                key={company.id}
                className={`${configTaiwind.animateView} relative flex justify-between  gap-x-1 py-5 px-3`}
              >
                <div className="flex min-w-0 gap-x-4 items-center">
                  <FaBuildingUser className="h-12 w-12 rounded-full p-2 flex-none text-primaryDark  bg-gray-200" />
                  <div className="min-w-0 flex-auto">
                    <p className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                      {company.name}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div>
                    <Tooltip
                      content="Ver contratos del clientes"
                      className="bg-default text-white"
                    >
                      <Button
                        isIconOnly
                        color="primary"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleButton(company.id)}
                      >
                        <FaInfo
                          className="h-4 w-4 flex-none"
                          aria-hidden="true"
                        />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </li>
            ))}
          </ScrollShadow>
        )}
      </ul>
    </>
  );
};

const ResultEmptyCompanies = () => {
  return (
    <li
      className={`${configTaiwind.animateView} relative flex justify-center gap-x-1 py-5 px-3  `}
    >
      <div className="text-center">
        <IoBanOutline className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-xl font-semibold text-gray-500">
          No hay resultado
        </h3>
      </div>
    </li>
  );
};
