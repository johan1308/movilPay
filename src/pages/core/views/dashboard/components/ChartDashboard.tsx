import Chart from "react-apexcharts";

export const ChartDashboard = () => {
  // Configuración del gráfico
  const options = {
    series: [
      {
        name: "XYZ MOTORS",
        data: [1, 2, 3, 4, 5,2,3,6,9,7,4,1,2,3,5,4,8,6],
      },
      {
        name: "XYZ 1",
        data: [1, 2, 3, 4, 5,2,3,6,9,7,4,1,2,3,5,4,8,6],
      },
      {
        name: "XYZ 3",
        data: [1, 2, 3, 4, 5,2,3,6,9,7,4,1,2,3,5,4,8,6],
      },
      {
        name: "XYZ 5",
        data: [41, 32, 23, 4, 5,2,3,6,9,7,4,1,2,3,5,4,8,6],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: any) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: "Price",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val: any) {
            return (val / 1000000).toFixed(0);
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
          type="line"
          height={320}
        />
      </div>
    </div>
  );
};
