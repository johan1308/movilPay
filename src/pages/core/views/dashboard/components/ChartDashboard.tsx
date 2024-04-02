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
import { PaymentParams } from "../../../params/payment/paymentParams";
import moment from "moment";
import { Payment } from "../../../interfaces/PaymentInterfaces";

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
        label: (context:any) => {
          console.log(context);
          return context.dataset.label + ': ' + context.parsed.y;
        }
      }
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
  const { payments, isLoading }: any = useSelector<RootState>(
    (d) => d.payments
  );

  const dataOption = useMemo(() => {
    const title = payments.map((resp: Payment) =>
      moment(resp.date).format("DD-MM-YYYY")
    );
    const valores = payments.map((item:any) => item.amount);        
    return {
      labels: title,
      datasets: [
        {
          label: "Dataset 1",
          data: valores,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
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
