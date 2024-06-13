import { Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useAllParams } from "../../../../../../../hooks/useAllParams";
import { useThemeMovilPay } from "../../../../../../../hooks/useTheme";

export const CompaniesFilterPayments = () => {
  const { darkMode } = useThemeMovilPay();
  const { addParams, params, deleteParams, setSearchParams } = useAllParams();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: params.company,
    },
  });
  const onSubmit = ({ since, until }: any) => {
    const { page, search, ...restParams } = params;
    const payload = { ...restParams, since, until };
    
    //setSearchParams(payload);
  };

  return (
    <div>
      <Select label="Select an animal" className="w-full" variant="faded" size="sm">
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
