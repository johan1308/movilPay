import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useMemo, useState } from "react";

export const ChartDashboard = () => {
  const { darkMode } = useThemeMovilPay();
  const [value, setValue] = useState<any>([]);
  const { dashboard, isLoading } = useSelector(
    (d: RootState) => d.DashboardPaymentSlice
  );

  // Configuración del gráfico
  const options = {
    series: value,
    options: {
      chart: {
        type: "line",
        height: 350,
        toolbar: {
          show: false,
        },
      },
    },

    stroke: {
      show: true,
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },

    tooltip: {
      theme: darkMode ? "dark" : "light",
      x: {
        formatter: function (val: any) {
          return `Pago`;
        },
      },
    },

    legend: {
      show: true,
      labels: {
        colors: darkMode ? "#ffffff" : "#000000",
      },
    },

    fill: {
      opacity: 1,
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4,
      },
      xaxis: {
        min: new Date("27 Jul 2017 10:00:00").getTime(),
        max: new Date("14 Aug 2017 10:00:00").getTime(),
      },
    },
  };

  const transactionExists = (newTransaction: any) => {
    return value.some(
      (transaction: any) => transaction.payment_id === newTransaction.payment_id
    );
  };

  useMemo(() => {
    // Agrupar los elementos por el nombre de la compañía

    const groupedCompanies = dashboard.reduce(
      (accumulator: any, element: any) => {
        const nameCompany = element.payment_method;

        // Si ya existe una entrada para la compañía, agregar el elemento al array existente
        // Si no, crear una nueva entrada en el acumulador
        if (!accumulator[nameCompany]) {
          accumulator[nameCompany] = [];
        }
        if (!transactionExists(element)) {
          accumulator[nameCompany].push(element.total);
        }
        return accumulator;
      },
      {}
    );

    const filtereArray = Object.keys(groupedCompanies).map((d) => {
      return {
        name: d,
        data: groupedCompanies[d],
      };
    });
    setValue(filtereArray);
  }, [isLoading]);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-md dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Total de ingresos</p>
      <div className="p-5 ">
        <Chart
          options={options}
          series={options.series}
          type="line"
          height={320}
        />
      </div>
    </div>
  );
};
