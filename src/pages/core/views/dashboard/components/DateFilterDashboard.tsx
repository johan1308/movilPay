import { useAllParams } from "../../../../../hooks/useAllParams";
import {
  Button,
  DateRangePicker,
  DateValue,
  RangeValue,
} from "@nextui-org/react";
import {
  DateInternalized,
  formaterTimeInternalizedRange,
  todayInternalized,
} from "../../../../../libs/GetTimeInternalized";
import { HiMiniTrash } from "react-icons/hi2";
import { useState } from "react";

export const DateFilterDashboard = ({ setSearchParams }: any) => {
  const today = todayInternalized();
  const { params,  setSearchParams: setSearch } = useAllParams();

  const handleChange = (date: any) => {
    setValue(date);
    const { since, until } = formaterTimeInternalizedRange(date);
    const { page, search, ...restParams } = params;
    const payload = {
      ...restParams,
      since: since.trim(),
      until: !until ? since.trim() : until.trim(),
    };
    setSearch(payload);
  };

  const initValue = () => {
    if (params.since) {
      return {
        start: DateInternalized(params.since),
        end: DateInternalized(params.until),
      };
    }

    return {
      start: todayInternalized(),
      end: todayInternalized(),
    };
  };

  const [value, setValue] = useState<RangeValue<DateValue> | null>({
    start: initValue().start,
    end: initValue().end,
  });

  const resetDate = () => {
    const { page, search, since, until, ...restParams } = params;
    setValue(null);
    setSearch(restParams);
  };

  return (
    <div className="flex items-center space-x-4">
      <DateRangePicker
        label="Fecha"
        className="max-w-xs"
        variant="faded"
        placeholderValue={today}
        maxValue={today}
        value={value}
        onChange={handleChange}
      />
      <Button color="danger" size="md" isIconOnly onClick={resetDate}>
        <HiMiniTrash className="h-6 w-6" />
      </Button>
    </div>
  );
};
