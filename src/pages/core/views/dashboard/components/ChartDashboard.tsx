import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";

export const ChartDashboard = () => {
  const { darkMode } = useThemeMovilPay();
  // Configuración del gráfico
  const options = {
    series: [
      {
        name: "XYZ MOTORS",
        data: [1, 2, 3, 4, 5, 2, 3, 6, 9, 7, 4, 1, 2, 3, 5, 4, 8, 6],
      },
      {
        name: "XYZ 1",
        data: [1, 2, 3, 4, 5, 2, 3, 6, 9, 7, 4, 1, 2, 3, 5, 4, 8, 6],
      },
      {
        name: "XYZ 3",
        data: [1, 2, 3, 4, 5, 2, 3, 6, 9, 7, 4, 1, 2, 3, 5, 4, 8, 6],
      },
      {
        name: "XYZ 5",
        data: [41, 32, 23, 4, 5, 2, 3, 6, 9, 7, 4, 1, 2, 3, 5, 4, 8, 6],
      },
    ],
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
  };

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Gráficas</p>
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
