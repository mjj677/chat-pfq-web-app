import React from "react";
import { Line } from "react-chartjs-2";

export const SentimentOverTimeChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Positive",
        data: data.positive,
        borderColor: "green",
        fill: false,
      },
      {
        label: "Negative",
        data: data.negative,
        borderColor: "red",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <Line data={chartData} options={options}/>;
};
