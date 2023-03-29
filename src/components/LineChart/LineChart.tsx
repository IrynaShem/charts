import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";
import { FC, useMemo } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export interface LineChartProps {
  datasets: {
    data: number[];
    borderColor: string;
  }[];
}

const displayFalse = { display: false };
const hideScales = {
  grid: displayFalse,
  border: displayFalse,
  ticks: displayFalse,
};

const options = {
  scales: { x: hideScales, y: hideScales },
  responsive: false,
  pointStyle: false,
  tension: 0.3,
  plugins: {
    legend: displayFalse,
    title: displayFalse,
  },
};

export const LineChart: FC<LineChartProps> = ({ datasets }) => {
  const data = useMemo(
    () => ({
      labels: ["", "", "", "", "", "", ""],
      datasets: datasets,
    }),
    [datasets]
  );

  return <Line options={options} data={data as any} />;
};
