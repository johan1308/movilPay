import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import React from "react";
import { useAllParams } from "../../../hooks/useAllParams";

interface ItemFilter {
  name: string;
  icon?: any;
  component: React.ReactNode;
  field:string
}

interface Props {
  filters?: ItemFilter[];
  children?: React.ReactNode;
  search?: React.ReactNode;
  bottons?: React.ReactNode;
  refresh?: React.ReactNode;
  title?: string;
}

export const TableLayout = ({
  filters,
  children,
  search,
  bottons,
  refresh,
  title,
}: Props) => {
  const {params} = useAllParams()
  const expandKeys = Object.keys(params)
  
  
  return (
    <div className="grid gap-4 grid-cols-5">
      <div className="col-span-full lg:col-span-1 bg-white dark:bg-primaryDark rounded-xl shadow-xl p-4">
        <div className="border-b">
          <p className="font-semibold text-xl dark:text-white">Buscador</p>
          <Input
            type="text"
            placeholder="Introduce para buscar"
            className="my-4 "
            variant="bordered"
            color="primary"
            size="lg"
          />
        </div>
        <div className="mt-4">
          {filters && (
            <>
              <p className="font-semibold text-xl mb-2 dark:text-white">
                Filtros
              </p>
              <Accordion 
                selectionMode="multiple" 
                isCompact 
                defaultExpandedKeys={expandKeys}
                >
                {filters.map((filter) => (
                  <AccordionItem
                    key={filter.field}
                    className="mb-3"
                    aria-label={filter.name}
                    title={<span className="font-semibold">{filter.name}</span>}
                  >
                    {filter.component}
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </div>
      <div className="col-span-full lg:col-span-4 bg-white p-5 h-full dark:bg-primaryDark rounded-xl shadow-xl">
        <div className="lg:flex lg:justify-between  mr-3 space-x-3">
          <p className="font-semibold text-xl mb-2 mb-7 lg:mb-0 dark:text-white">{title}</p>
          {bottons}
        </div>
        <div className=" mt-5">{children}</div>
      </div>
    </div>
  );
};
