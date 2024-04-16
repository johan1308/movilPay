import { Button } from "@nextui-org/react";
import { BiTrash } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export const LiCompanySelected = ({person}:any) => {


  return (
    <li className="flex items-center justify-between space-x-3 py-4">
      <div className="flex min-w-0 flex-1 items-center space-x-3">
        <div className="flex-shrink-0">
          
        </div>
        <div className="min-w-0 flex-1">
          <Link to={`/companies/company/${person.name}/`} className="truncate text-sm dark:text-white font-medium text-gray-900">
            {person.name}
          </Link>
          <p className="truncate text-sm font-medium text-gray-500">
            {person.role}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Button
          isIconOnly
          type="button"
          size="sm"
          color="danger"
        >
          <BiTrash className="h-5 w-5 text-white" aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
};
