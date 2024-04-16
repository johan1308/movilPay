import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../hooks/useTheme";

export const ChartMethodPayments = () => {
  const { darkMode } = useThemeMovilPay();
  const options = {
    series: [
      {
        name: "Organic",
        data: [
          { x: "Mon", y: 231 },
          { x: "Tue", y: 122 },
          { x: "Wed", y: 63 },
          { x: "Thu", y: 421 },
          { x: "Fri", y: 122 },
          { x: "Sat", y: 323 },
          { x: "Sun", y: 111 },
        ],
      },
      {
        name: "Social media",
        data: [
          { x: "Mon", y: 232 },
          { x: "Tue", y: 113 },
          { x: "Wed", y: 341 },
          { x: "Thu", y: 224 },
          { x: "Fri", y: 522 },
          { x: "Sat", y: 411 },
          { x: "Sun", y: 243 },
        ],
      },
    ],
    options: {
      chart: {
        type: "column",
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
      labels:{
        colors:darkMode?'#ffffff' :'#000000'
      }
    },

    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
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
