import {
  SelectItem,
  Select,
  Autocomplete,
  AutocompleteItem,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../../store/store";
import { useAsyncList } from "@react-stately/data";
import { movilPayAPI } from "../../../../../../../api/movilPayAPI";

export const MovilPayMethod = () => {
  const { companies } = useSelector((d: RootState) => d.companies);
  const { banks } = useSelector((d: RootState) => d.banks);
  let list = useAsyncList<any>({
    async load({ signal, filterText }) {
      let res = await movilPayAPI.get(`/api/companies/?search=${filterText}`, {
        signal,
      });
      let json = await res.data.results;
      console.log(json);
      return {
        items: json,
      };
    },
  });

  const handleSelected = (e: any) => {
    const data = [...list.items];

    const find = data.find((d: any) => d.id == e);
    const devolver = !find ? [] : find;
  };

  return (
    <form className="space-y-6">
      <div className="col-span-full">
        <label htmlFor="">Compañía</label>
        <Autocomplete
          inputValue={list.filterText}
          isLoading={list.isLoading}
          onFocus={(e) => e.preventDefault()}
          items={list.items}
          placeholder="Escribe para buscar"
          variant="bordered"
          size="lg"
          onInputChange={list.setFilterText}
          onSelectionChange={(e) => handleSelected(e)}
        >
          {(item) => (
            <AutocompleteItem key={item.id} className="capitalize">
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
      <div>
        <label htmlFor="">Banco origen</label>
        <Select className="w-full" variant="bordered" size="lg">
          {banks.map((company) => (
            <SelectItem key={company.id} value={company.id}>
              {company.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="">Banco destino</label>
        <Select className="w-full" variant="bordered" size="lg">
          {banks.map((company) => (
            <SelectItem key={company.id} value={company.id}>
              {company.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="">Referencia</label>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          defaultValue="junior@nextui.org"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="">Teléfono</label>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          defaultValue="junior@nextui.org"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="">Monto</label>
        <Input
          type="email"
          label="Email"
          variant="bordered"
          defaultValue="junior@nextui.org"
          className="w-full"
        />
      </div>
      <div>
        <label htmlFor="">Descripción</label>

        <Textarea
          placeholder="Enter your description"
          className="w-full"
          variant="bordered"
        />
      </div>
    </form>
  );
};
