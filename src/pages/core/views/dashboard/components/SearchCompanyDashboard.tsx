import { useSelector } from "react-redux";
import { LiCompanySelected } from "./LiCompanySelected";
import { RootState } from "../../../../../store/store";

export const SearchCompanyDashboard = () => {
  const { company: companies } = useSelector((d: RootState) => d.dashCompany);

  return (
    <div>
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-500 dark:text-white">
          Compañías seleccionadas
        </h3>
        <ul
          role="list"
          className={`mt-4 divide-y divide-gray-200   dark:divide-gray-500 border-t border-gray-200 dark:border-gray-500`}
        >
          {companies.length == 0 && <NoHayResultado />}
          {companies.map((company: any) => (
            <LiCompanySelected key={company.id} company={company} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const NoHayResultado = () => {
  return (
    <>
      <li className="flex items-center justify-center  py-10">
        <span className="text-gray-400">No hay resultado</span>
      </li>
      <li className="flex  justify-end ">
        <span className="text-gray-400 text-xs">
          Si no hay seleccionado se mostraran todos por defecto
        </span>
      </li>
    </>
  );
};
