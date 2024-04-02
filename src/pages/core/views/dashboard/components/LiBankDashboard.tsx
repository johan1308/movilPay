import { BiSolidBank } from "react-icons/bi";
import { Banks } from "../../../interfaces/BanksInterfaces";


interface Props {
    bank:Banks
}

export const LiBankDashboard = ({ bank }: Props) => {
  return (
    <li key={bank.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex items-center min-w-0 gap-x-4">
        <BiSolidBank className="h-5 w-5 text-tertiary" />
        <div className="min-w-0 flex ">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {bank.name}
          </p>
          {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500"></p> */}
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{bank.achronym}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Codigo: <span>{bank.code}</span>
        </p>
      </div>
    </li>
  );
};
