import { MethodPaymentsCompany } from "./components/MethodPaymentsCompany";
import { InfoCompany } from "./components/InfoCompany";
import { ChartIncomeCompany } from "./components/ChartIncomeCompany";
import { HeaderCompany } from "./components/HeaderCompany";
import { configTaiwind } from "../../../../../utils/configTaiwind";

export const CompanyCore = () => {
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
            <ChartIncomeCompany />
          </div>
        </div>
      </main>
    </>
  );
};
