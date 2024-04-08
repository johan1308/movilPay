import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { navigation } from "../../data/menu";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type dataBread = {
  path: string;
  name: string;
  icon?: any;
};
interface Props {
  data: dataBread[];
}

export const BreadCrumbCore = () => {
  const param = useParams();
  const ruta: any = param["*"];
  const arrayRoute = ruta!.split("/");
  

  useEffect(() => {
    let valid = true;
    let count = 1;
    
  }, []);

  return (
    <div className="mb-7 bg-white dark:bg-primaryDark rounded-xl shadow-xl p-4">
      <Breadcrumbs size="lg">
        <BreadcrumbItem>das</BreadcrumbItem>
        <BreadcrumbItem>das</BreadcrumbItem>
        <BreadcrumbItem>das</BreadcrumbItem>
        <BreadcrumbItem>das</BreadcrumbItem>
        <BreadcrumbItem>das</BreadcrumbItem>
        <BreadcrumbItem>das</BreadcrumbItem>
      </Breadcrumbs>
      <p className="mt-5 text-xl font-semibold dark:text-white">dsadsad</p>
    </div>
  );
};
