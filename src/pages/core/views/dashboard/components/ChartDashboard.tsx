import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { useMemo, useState } from "react";
import { getMonthById } from "../../../services/getMonthById";

export const ChartDashboard = () => {
  const { darkMode } = useThemeMovilPay();
  const [data, setData] = useState<any>([]);
  const { dashboard, isLoading } = useSelector((d: RootState) => d.dashboard);

  // Configuración del gráfico
  const options = {
    series: data,
    options: {
      chart: {
        type: "area",
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
        opacity: 0.4
      },
      xaxis: {
        min: new Date("27 Jul 2017 10:00:00").getTime(),
        max: new Date("14 Aug 2017 10:00:00").getTime()
      }
    }
  
  };

  useMemo(() => {
    // Agrupar los elementos por el nombre de la compañía
    const groupedCompanies = dashboard.reduce(
      (accumulator: any, element: any) => {
        const nameCompany = element.commpany;

        // Si ya existe una entrada para la compañía, agregar el elemento al array existente
        // Si no, crear una nueva entrada en el acumulador
        if (!accumulator[nameCompany]) {
          accumulator[nameCompany] = [];
        }
        accumulator[nameCompany].push(element.total);

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
    setData(filtereArray);
  }, [isLoading]);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Gráficas</p>
      <div className="p-5 ">
        <Chart
          options={options}
          series={options.series}
          type="area"
          height={320}
        />
      </div>
    </div>
  );
};
