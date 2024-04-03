import { useDispatch } from "react-redux";
import { useAllParams } from "../../../../../hooks/useAllParams";
import { CompaniesParams } from "../../../params/companies/companiesParams";
import { CompaniesThunks } from "../../../../../store/companies/thunks";
import { AppDispatch } from "../../../../../store/store";
import { useEffect } from "react";
import { TemplateTableLayout } from "../../../layout/TemplateTableLayout";
import { ButtonsCompanies } from "./components/ButtonsCompanies";
import { CheckFilterCompanies } from "./components/CheckFilterCompanies";
import { TableCompanies } from "./components/TableCompanies";

export const AllCompanies = () => {
  const { params, deleteParams, addParams } = useAllParams();
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
      return;
    }
    addParams({ search });
  };

  useEffect(() => {
    handleConsultation();
  }, [params]);

  return (
    <div className="animate-fade-up">
      <TemplateTableLayout
        title="Información de las compañía"
        bottons={<ButtonsCompanies refresh={handleConsultation} />}
        search={handleSearch}
        filters={[
          {
            name: "Estado",
            component: <CheckFilterCompanies />,
            field: "status",
          },
        ]}
      >
        <TableCompanies />
      </TemplateTableLayout>
    </div>
  );
};
