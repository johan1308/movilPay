import { Suspense, lazy, useMemo } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { SidebarCore } from "../components/SidebarCore";
import { navigation } from "../data/menu";
import { Loading } from "../../../components/Loading";
import { Statistics, User, Report, Companies } from "../data/ItemRouter";
import { AllCompanies, CreateCompanies } from "../views/companies";
import { CompanyCore } from "../views/companies/company/CompanyCore";
import { StepOneCreate } from "../views/companies/create/step1/StepOneCreate";
import { StepTwoCreate } from "../views/companies/create/step2/StepTwoCreate";
import { BreadCrumbCore } from "../components/BreadCrumb/BreadCrumbCore";
import FinancesCore from "../views/finances/FinancesCore";
import PaymentCore from "../views/finances/payments/PaymentCore";
import { ColletionsCore } from "../views/finances/collections/ColletionsCore";

export const CoreRouters = () => {
  return (
    <>
      <SidebarCore>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          }
        >
          <>
            {/* {getTitle} */}
            <BreadCrumbCore />
            <Routes>
              <Route path="/" element={<Navigate to="dashboard/" />} />
              <Route path="dashboard/" element={<Statistics />} />
              <Route path="users/" element={<User />} />
              <Route path="reports/" element={<Report />} />
              <Route path="finance/" element={<FinancesCore />}>
                <Route index element={<Navigate to="payments/" />} />
                <Route path="payments/" element={<PaymentCore />} />
                <Route path="collections/" element={<ColletionsCore />} />
                <Route path="*" element={<Navigate to="./" />} />
              </Route>

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
