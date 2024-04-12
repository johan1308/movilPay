import { Pagination } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useAllParams } from "../../../../../../../hooks/useAllParams";
import { RootState } from "../../../../../../../store/store";


export const PaginatorPayments = () => {
  const {
    addParams,
    deleteParams,
    params: { page },
  } = useAllParams();

  const { count,payments } = useSelector((d:RootState) => d.payments);

  const pages = Math.ceil(count / 10);
  const handlePages = (pageFunction: number) => {
    if (pageFunction == 1) {
      deleteParams(["page"]);
      return;
    }
    addParams({ page: pageFunction });
  };

  return (
    <div className="flex w-full justify-end">
      {payments.length> 0&&(
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          size="lg"
          page={!!page ? Number(page) : 1}
          total={pages}
          onChange={handlePages}
        />
      )}
    </div>
  );
};
