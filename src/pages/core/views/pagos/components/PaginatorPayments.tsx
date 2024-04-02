import { Pagination } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useAllParams } from "../../../../../hooks/useAllParams";

export const PaginatorPayments = () => {
  const {
    addParams,
    deleteParams,
    params: { page },
  } = useAllParams();

  const { count }: any = useSelector<RootState>((d) => d.payments);

  const pages = Math.ceil(count / 10);

  const handlePages = (pageFuction: number) => {
    if (pageFuction == 1) {
      deleteParams(["page"]);
      return;
    }
    addParams({ page: pageFuction });
  };

  return (
    <div className="flex w-full justify-end">
      <Pagination
        isCompact
        showControls
        showShadow
        color="primary"
        size="lg"
        page={page ? Number(page) : 1}
        total={pages}
        onChange={handlePages}
      />
    </div>
  );
};
