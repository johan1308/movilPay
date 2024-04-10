import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { PaymentsThunks } from "../../../../../store/payment/thunks";
import { PaymentParams } from "../../../params/payment/payments/paymentParams";
import moment from "moment";
import { Payment } from "../../../interfaces/PaymentInterfaces";
import { Dashboard } from "../../../interfaces/DashboardInterfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          console.log(context);
          return context.dataset.label + ": " + context.parsed.y;
        },
      },
    },
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Grafica",
    },
  },
};

export const ChartDashboard = () => {
  const { dashboard, isLoading } = useSelector(
    (resp: RootState) => resp.dashboard
  );

  const getDataSets = (data?: Dashboard) => {
    
    
    return {
      label: 'prueba',
      data: [1,2,3,4,5,6,7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    };
  };

  const dataOption = useMemo(() => {
    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ];

    return {
      labels,
      datasets: [getDataSets()],
    };
  }, [isLoading]);

  const params = new PaymentParams();
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // params.since = moment(firstDay).format("YYYY-MM-DD");
    // params.until = moment(today).format("YYYY-MM-DD");

    dispatch(PaymentsThunks(params));
  }, []);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Graficas</p>
      <div className="p-5">
        <Line options={options} data={dataOption} />
      </div>
    </div>
  );
};
