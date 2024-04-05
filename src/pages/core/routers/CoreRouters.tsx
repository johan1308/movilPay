import { Suspense, lazy, useMemo } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { SidebarCore } from "../components/SidebarCore";
import { navigation } from "../data/menu";
import { Loading } from "../../../components/Loading";
import {
  Statistics,
  User,
  Report,
  Payments,
  Companies,
} from "../data/ItemRouter";
import { AllCompanies, CreateCompanies } from "../views/companies";
import { CompanyCore } from "../views/companies/company/CompanyCore";
import { StepOneCreate } from "../views/companies/create/step1/StepOneCreate";
import { StepTwoCreate } from "../views/companies/create/step2/StepTwoCreate";

export const CoreRouters = () => {
  const param = useParams();
  const ruta = param["*"];
  const getTitle = useMemo(() => {
    const filtrado = navigation.find((title) => title.path == ruta);

    if (!filtrado) return "";
    return (
      <>
        <p className="text-3xl font-semibold flex text-secondary mb-12 dark:text-white">
          {filtrado.name} <filtrado.icon className="ml-3 mt-1" />
        </p>
      </>
    );
  }, [ruta]);

  return (
    <>
      <SidebarCore path={getTitle}>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          }
        >
          <>
            {getTitle}
            <Routes>
              <Route path="/" element={<Navigate to="dashboard/" />} />
              <Route path="dashboard/" element={<Statistics />} />
              <Route path="users/" element={<User />} />
              <Route path="reports/" element={<Report />} />
              <Route path="payments/" element={<Payments />} />
              <Route path="companies/" element={<Companies />}>
                <Route index element={<AllCompanies />} />
                {/* Rutas del create */}
                <Route path="create/" element={<CreateCompanies />}>
                  <Route index element={<Navigate to="step1/" />} />
                  <Route path="step1/" element={<StepOneCreate />} />
                  <Route path="step2/" element={<StepTwoCreate />} />
                  <Route path="*" element={<Navigate to="step1/" />} />
                </Route>
                <Route path=":id/edit/" element={<CompanyCore />} />
                <Route path="*" element={<Navigate to="./" />} />
              </Route>
              <Route path="collections/" element={<Companies />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        </Suspense>
      </SidebarCore>
    </>
  );
};
