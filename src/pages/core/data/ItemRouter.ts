import { lazy } from "react";

export const Statistics = lazy(
  () =>
    import(
      /* webpackChunkName: "Statistics" */ "../views/dashboard/DashboardCore"
    )
);

export const Setting = lazy(
  () =>
    import(/* webpackChunkName: "User" */ "../views/setting/SettingCore")
);

export const Report = lazy(
  () =>
    import(/* webpackChunkName: "Report" */ "../views/reportes/ReportesCore")
);



export const finances = lazy(
  () => import(/* webpackChunkName: "Payments" */ "../views/finances/FinancesCore")
);

export const Companies = lazy(
  () =>
    import(
      /* webpackChunkName: "Companies" */ "../views/companies/CompaniesCore"
    )
);


