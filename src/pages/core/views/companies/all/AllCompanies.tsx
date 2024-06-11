import { useDispatch } from "react-redux";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { CompaniesParams } from "../../../params/companies/companiesParams";
import { CompaniesThunks } from "../../../../../store/companies/thunks";
import { AppDispatch } from "../../../../../store/store";
import { useEffect } from "react";
import { SearchCompanies } from "./components/SearchCompanies";
import { configTaiwind } from "../../../../../utils/configTaiwind";
import { ResultsSearchCompanies } from "./components/ResultsSearchCompanies";
import { ServicesCompanies } from "./components/ServicesCompanies";
import { PLayouts } from "../../../layout/PLayouts";

export const AllCompanies = () => {
  const { params, deleteParams, addParams, setSearchParams } = useAllParams();
  const dispatch = useDispatch<AppDispatch>();

  const handleConsultation = () => {
    const param = new CompaniesParams();
    params.status && (param.status = params.status);
    params.page && (param.page = Number(params.page));
    params.search && (param.search = params.search);
    dispatch(CompaniesThunks(param));
  };

  const handleSearch = ({ search }: any) => {
    if (typeof search == "undefined" || search.length == 0) {
      deleteParams(["search"]);
      setSearchParams({});
      return;
    }
    setSearchParams({ search });
  };

  useEffect(() => {
    handleConsultation();
  }, [params]);

  return (
    <div className={`${configTaiwind.animateView}`}>
      <div className="grid gap-4 grid-cols-5">
        <div className="col-span-full lg:col-span-2">
          <div className="">
            <SearchCompanies search={handleSearch} />
          </div>
          <div className="mt-2 bg-white dark:bg-primaryDark shadow-md rounded-xl p-2">
            <h3 className="text-lg font-medium  p-1 dark:text-white">
              Resultado de la búsqueda
            </h3>
            {(typeof params.search == "undefined" ||
              params.search.length == 0) && (
              <p className="mt-1 text-sm text-gray-500">
                Por defecto se muestran los 10 últimos registrados
              </p>
            )}
            <ResultsSearchCompanies />
          </div>
        </div>
        <div className="col-span-full lg:col-span-3 ">
          <div className="lg:flex lg:justify-between  mr-3 space-x-3 ">
            <PLayouts message="Servicios de la compañía" />
          </div>
          <div className=" mt-5">
            <ServicesCompanies />
          </div>
        </div>
      </div>
    </div>
  );
};
