import { FcBriefcase, FcCurrencyExchange } from "react-icons/fc";


export const financesRouters =  [
    {
      name: "Pagos",
      path: "finance/payments/",
      icon: FcCurrencyExchange,
      superAdmin: false,
      show: true,
      children: null,
    },
    // {
    //   name: "Cobranzas",
    //   path: "finance/collections/",
    //   icon: FcBriefcase,
    //   superAdmin: false,
    //   show: true,
    //   children: null,
    // },
  ]
