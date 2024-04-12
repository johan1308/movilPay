
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { useEffect } from "react";
import { MethodPaymentsThunks } from "../../../../store/payment/thunks";
import { SelectItem,Select } from "@nextui-org/react";


export const SelectCompanyOrigin = () => {
    const { companies, isLoading } = useSelector((d: RootState) => d.companies);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
      dispatch(MethodPaymentsThunks());
    }, []);
  
    return (
      <div>
        <Select className="w-full" variant="bordered">
          {companies.map((company) => (
            <SelectItem key={company.id} value={company.id}>
              {company.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  };
  
  export const SelectCompanyDestiny = () => {
    const { companies, isLoading } = useSelector((d: RootState) => d.companies);
    return (
      <div>
        <Select className="w-full" variant="bordered">
          {companies.map((company) => (
            <SelectItem key={company.id} value={company.id}>
              {company.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  };
  
