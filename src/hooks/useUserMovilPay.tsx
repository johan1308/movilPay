import { useMemo } from "react";

interface Root {
  id: number
  name: string
  lastname: string
  identification: string
  phone: any
  email: string
  is_active: boolean
  permissions: any
  groups: string[]
  menus: any[]
}

export const useUserMovilPay = ():Root => {
  const data = useMemo(() => {
    const local = JSON.parse(localStorage.getItem("user") ?? "{}");
    console.log(local);
    
    return local;
  }, []);
  return data
};



