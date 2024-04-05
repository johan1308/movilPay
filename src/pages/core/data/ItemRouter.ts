import { lazy } from "react";

export const Statistics = lazy(
  () =>
    import(
      /* webpackChunkName: "Statistics" */ "../views/dashboard/DashboardCore"
    )
);

export const User = lazy(
  () =>
    import(/* webpackChunkName: "User" */ "../views/usuarios/UsuariosCore")
);

export const Report = lazy(
  () =>
    import(/* webpackChunkName: "Report" */ "../views/reportes/ReportesCore")
);



export const Payments = lazy(
  () => import(/* webpackChunkName: "Payments" */ "../views/pagos/PaymentCore")
);

export const Companies = lazy(
  () =>
    import(
      /* webpackChunkName: "Companies" */ "../views/companies/CompaniesCore"
    )
);

export const Collections = lazy(
  () =>
    import(
      /* webpackChunkName: "Collections" */ "../views/cobranzas/CobranzasCore"
    )
);
