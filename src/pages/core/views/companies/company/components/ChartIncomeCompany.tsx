import Chart from "react-apexcharts";
import { useThemeMovilPay } from "../../../../../../hooks/useTheme";
import { useEffect, useState } from "react";

export const ChartIncomeCompany = () => {
  const { darkMode } = useThemeMovilPay();
  const a = Array(5);
  const [first, setfirst] = useState({
    pm: [...a].map((d) => Math.floor(Math.random() * 4000)),
    transf: [...a].map((d) => Math.floor(Math.random() * 4000)),
  });

  const series = [
    {
      name: "Pago Movil",
      data: first.pm,
    },
    {
      name: "Transferencia",
      data: first.transf,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setfirst((d) => ({
        pm: [...d.pm, Math.floor(Math.random() * 4000)],
        transf: [...d.transf, Math.floor(Math.random() * 4000)],
      }));
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = {
    series,
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
        opacity: 0.4,
      },
      xaxis: {
        min: new Date("27 Jul 2017 10:00:00").getTime(),
        max: new Date("14 Aug 2017 10:00:00").getTime(),
      },
    },
  };

  return (
    <section aria-labelledby="notes-title" className="">
      <div className="">
        <div className="divide-y divide-gray-200 dark:divide-secondaryDark">
          <div className="py-5 ">
            <h2
              id="notes-title"
              className="text-lg font-medium text-gray-900 dark:text-titleDark"
            >
              Ingresos de la compañía
            </h2>
          </div>
          <div className="p-4 bg-white dark:bg-primaryDark shadow-md sm:overflow-hidden rounded-xl">
            <Chart
              options={options}
              series={options.series}
              type="area"
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
