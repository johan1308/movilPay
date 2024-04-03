import { useSelector } from "react-redux";
import { useAllParams } from "../../../../../../hooks/useAllParams";
import { RootState } from "../../../../../../store/store";
import { Pagination } from "@nextui-org/react";

export const PaginatorCompanies = () => {
  const {
    addParams,
    deleteParams,
    params: { page },
  } = useAllParams();

  const { count }: any = useSelector<RootState>((d) => d.companies);

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
