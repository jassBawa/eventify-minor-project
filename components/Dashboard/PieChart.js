import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ labels, dataset }) {
  const data = {
    labels,
    datasets: [
      {
        data: dataset,
        backgroundColor: [
          "rgb(255, 99, 132)", // Red
          "rgb(54, 162, 235)", // Blue
          "rgb(75, 192, 192)", // Green
          "rgb(255, 205, 86)", // Yellow
          // Add more colors as
        ],
      },
    ],
  };
  return (
    <>
      <h3>Year Wise Distribution</h3>
      <Pie data={data} className=" bg-white shadow-sm py-4 px-6" />
    </>
  );
}
