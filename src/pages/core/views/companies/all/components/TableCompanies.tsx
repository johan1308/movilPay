import { useDispatch, useSelector } from "react-redux";
import { TableLayout, valueType } from "../../../../layout/TableLayout";
import { PaginatorCompanies } from "./PaginatorCompanies";
import { AppDispatch, RootState } from "../../../../../../store/store";
import { Button, Tooltip } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
import { PatchCompaniesThunks } from "../../../../../../store/companies/thunks";
import { PopoverCompanies } from "./PopoverCompanies";
import { useEffect } from "react";
import { OptionsThunks } from "../../../../../../store/options/thunks";

export const TableCompanies = () => {
  const { companies, isLoading } = useSelector(
    (resp: RootState) => resp.companies
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleConfirmPopover = ({ id, status }: any) => {
    const payload = {};
    return;
    PatchCompaniesThunks(payload, id);
  };

  const dataTable: valueType[] = [
    {
      name: "Nombre",
      value: "name",
    },
    {
      name: "Rif",
      value: "rif",
    },
    {
      name: "Descripción",
      value: "description",
    },
    {
      name: "Estado",
      value: (item: any) => {
        return (
          <PopoverCompanies
            message="Estas seguro que quieres cambiar el Estado?"
            title="Cambio de estado"
            confirm={() => handleConfirmPopover(item)}
            item={item}
          >
            <Button
              color={item.status == 1 ? "success" : "danger"}
              variant="light"
            >
              {item.status_name}
            </Button>
          </PopoverCompanies>
        );
      },
    },
    {
      name: "Email",
      value: "email",
    },
    {
      name: "Accion",
      value: (item: any) => {
        return (
          <>
            <Tooltip
              content="Editar compañia"
              className=" bg-default text-white "
            >
              <Button isIconOnly color="warning" aria-label="Like">
                <FaEdit className="text-white" />
              </Button>
            </Tooltip>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(OptionsThunks({type:2}));
  }, []);

  return (
    <>
      <TableLayout
        isLoading={isLoading}
        data={companies}
        columns={dataTable}
        Paginator={<PaginatorCompanies />}
      />
    </>
  );
};
