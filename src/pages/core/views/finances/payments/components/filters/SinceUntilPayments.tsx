import { DateValue, RangeCalendar, RangeValue } from "@nextui-org/calendar";
import { useAllParams } from "../../../../../../../hooks/useAllParams";

import {
  DateInternalized,
  formaterTimeInternalizedRange,
  todayInternalized,
} from "../../../../../../../libs/GetTimeInternalized";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";
import { Button } from "@nextui-org/react";
import { HiMiniTrash } from "react-icons/hi2";
import { useState } from "react";

export const SinceUntilPayments = () => {
  const { darkMode } = useThemeMovilPay();
  const { params, setSearchParams } = useAllParams();

  

  const handleChange = (date: any) => {
    setValue(date)
    const { since, until } = formaterTimeInternalizedRange(date);
    const { page, search, ...restParams } = params;
    const payload = {
      ...restParams,
      since: since.trim(),
      until: !until ? since.trim() : until.trim(),
    };
    setSearchParams(payload);
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

  const [value, setValue] = useState<RangeValue<DateValue>|null>({
    start: initValue().start,
    end: initValue().end,
  });

  const resetDate = () => {
    const { page, search,since,until, ...restParams } = params;
    setValue(null)
    setSearchParams(restParams);
  };

  

  return (
    <>
      <RangeCalendar
        aria-label="Date (No Selection)"
        value={value}
        bottomContent={
          <div className="flex justify-end m-2">
            <Button color="danger" size="sm" isIconOnly onClick={resetDate}>
              <HiMiniTrash className="h-6 w-6" />
            </Button>
          </div>
        }
        maxValue={todayInternalized()}
        className={`w-full ${darkMode && "dark"}`}
        classNames={{
          cell: "w-full",
          cellButton: "w-full",
        }}
        onChange={handleChange}
      />
    </>
  );
};
