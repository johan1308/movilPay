import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import { useThemeMovilPay } from "../../../../../../hooks/useTheme";
import { useForm } from "react-hook-form";


interface Props {
  item: any;
  message?: string;
  children?: React.ReactNode;
  titleButton?: string;
  title: string;
  confirm: (e?: any) => void;
  cancel?: (e?: any) => void;
}

export const PopoverCompanies = ({
  children,
  title,
  titleButton,
  confirm,
}: Props) => {
  const { darkMode } = useThemeMovilPay();
  const [isOpen, setIsOpen] = React.useState(false);
  
  


  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });

  return (
    <Popover
      placement="bottom"
      showArrow
      backdrop="blur"
      offset={10}
      className={darkMode ? "dark" : ""}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger>
        {children ? children : <Button color="primary">{titleButton}</Button>}
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            <p
              className="text-small dark:text-white font-bold text-foreground"
              {...titleProps}
            >
              {title}
            </p>
            <form className="mt-2 flex flex-col gap-2 w-full">
              <div>
                
              </div>
              <div>
                <p className="text-xs text-default dark:text-white">
                  Coloca una breve descripción del motivo de su cambio
                </p>
                <Textarea
                  label="Motivo"
                  variant="faded"
                  placeholder="Introduce la descripción"
                  className="dark:text-white"
                />
              </div>
              <Button color="primary" className="text-white">
                Modificar
              </Button>
            </form>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
