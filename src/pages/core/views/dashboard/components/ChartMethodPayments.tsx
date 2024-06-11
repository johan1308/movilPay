import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { getMonthById } from "../../../services/getMonthById";

export const ChartMethodPayments = () => {
  const { darkMode } = useThemeMovilPay();
  const [data, setData] = useState<any>([]);
  const { dashboard, isLoading } = useSelector((d: RootState) => d.dashboard);
  const options = {
    series: data,
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
    },
    toolbar: {
      show: false,
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
  };

  useMemo(() => {
    // Agrupar los elementos por el nombre de la compañía
    const groupedMethod = dashboard.reduce(
      (accumulator: any, element: any) => {
        const nameMethod = element.payment_method;
        if (!accumulator[nameMethod]) {
          accumulator[nameMethod] = [];
        }
        accumulator[nameMethod].push(element);

        return accumulator;
      },
      {}
    );

    const filtereArray = Object.keys(groupedMethod).map((d) => {
      const filt = groupedMethod[d].reduce(
        (acumulador: any, { month, total }: any) => {
          const nombreMes = getMonthById(month);
          if (!acumulador[nombreMes]) {
            acumulador[nombreMes] = 0;
          }
          acumulador[nombreMes] += total;
          return acumulador;
        },
        {}
      );

      const formater = Object.entries(filt).map(([x, y]) => ({ x, y }));

      return {
        name: d,
        data: formater,
      };
    });

    setData(filtereArray);
  }, [isLoading]);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-md dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Métodos de pago</p>
      <div className="p-5 ">
        <Chart
          options={options}
          series={options.series}
          type="bar"
          height={320}
        />
      </div>
    </div>
  );
};
