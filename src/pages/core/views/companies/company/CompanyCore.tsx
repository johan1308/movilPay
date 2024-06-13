import { MethodPaymentsCompany } from "./components/MethodPaymentsCompany";
import { InfoCompany } from "./components/InfoCompany";
import { ChartIncomeCompany } from "./components/ChartIncomeCompany";
import { HeaderCompany } from "./components/HeaderCompany";
import { configTaiwind } from "../../../../../utils/configTaiwind";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CompaniesIDThunks } from "../../../../../store/companies/thunks";
import { AppDispatch } from "../../../../../store/store";

export const CompanyCore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const handleSearch = () => {
    dispatch(CompaniesIDThunks({ id }));
  };

  useEffect(() => {
    if (id) handleSearch();
  }, []);

  return (
    <>
      <main className={configTaiwind.animateView}>
        {/* Page header */}
        <HeaderCompany />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-full">
            {/* Información de la compañía */}
            <InfoCompany />
          </div>
          <div className="col-span-full ">
            {/* Método de pago */}
            <MethodPaymentsCompany />
          </div>
          <div className="col-span-full">
            {/* Gráfica de los ingresos de la compañía */}
            {/* <ChartIncomeCompany /> */}
          </div>
        </div>
      </main>
    </>
  );
};
