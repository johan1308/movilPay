import { Button } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Company } from "../../../interfaces/CompaniesInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { setCompanyDash } from "../../../../../store/dashboard/DashCompanySlice";
import { setCookie } from "../../../../../config/cookies";

interface Props {
  company: Company;
}

export const LiCompanySelected = ({ company }: Props) => {
  const { company: comp } = useSelector((d: RootState) => d.dashCompany);
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: number) => {
    const del = comp.filter((d) => d.id !== id);
    dispatch(setCompanyDash([...del]));
    setCookie("companyDash", [...del]);
  };
  return (
    <li className="flex items-center justify-between space-x-3 py-4">
      <div className="flex min-w-0 flex-1 items-center space-x-3">
        <div className="flex-shrink-0"></div>
        <div className="min-w-0 flex-1">
          <Link
            to={`/companies/company/${company.name}/`}
            className="truncate text-sm dark:text-white font-medium text-gray-900"
          >
            {company.name}
          </Link>
          <p className="truncate text-sm font-medium text-gray-500">
            {company.rif}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Button
          isIconOnly
          type="button"
          size="sm"
          color="danger"
          onClick={() => handleDelete(company.id)}
        >
          <BiTrash className="h-5 w-5 text-white" aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
};
