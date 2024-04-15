import Chart from "react-apexcharts";

export const ChartMethodPayments = () => {
  const options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57],
      },
      {
        name: "Revenue",
        data: [76, 85, 101],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36],
      },
    ],
    options: {
      chart: {
        type: "column",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ['#4CAF50'], // Color de las barras en modo oscuro
      theme: {
        mode: 'dark', // Modo oscuro
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands";
          },
        },
        
      },
    },
    
  };

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Gráficas</p>
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
