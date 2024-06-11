import Chart from "react-apexcharts";

export const ChartMethodMostUsing = () => {
  const options = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      height: 350,
    },
    
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
  };

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
