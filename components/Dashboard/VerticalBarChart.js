import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Branch Wise Distribution of Students",
    },
  },
};

function VerticalBarChart({ labels, dataset }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: dataset,
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color for bars
        borderColor: "rgba(75, 192, 192, 1)", // Border color for bars
        borderWidth: 1, // Border width for bars
      },
    ],
  };
  return (
    <Bar
      options={options}
      data={data}
      className="bg-white shadow-sm py-4 px-6"
    />
  );
}

export default VerticalBarChart;
