import { Pagination } from "@nextui-org/react";
import { useMemo, useState } from "react";


export const PaginatorPayments = () => {
    
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = 10;

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return 10;
  }, [page]);
  return (
    <div className="flex w-full justify-end">
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            size="lg"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
  )
}
