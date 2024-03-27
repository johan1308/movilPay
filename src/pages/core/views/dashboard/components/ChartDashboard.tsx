import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 600, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 700, pv: 2400, amt: 2400 },
];

export const ChartDashboard = () => {
  const [chartWidth, setChartWidth] = useState(Math.max(window.innerWidth- 400 ,335) );

  useEffect(() => {
    const handleResize = () => {      
      setChartWidth(window.innerWidth - 300);
    };
    
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white rounded-xl pb-6 pt-3 shadow-lg dark:bg-primaryDark">
      <p className=" font-semibold ml-7 text-2xl mb-5">Graficas</p>      
      <LineChart
        width={chartWidth} height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#52AE32" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip labelClassName="text-gray-900"/>
      </LineChart>
    </div>
  );
};
