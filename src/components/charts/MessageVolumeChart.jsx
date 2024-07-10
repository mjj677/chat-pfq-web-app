import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const MessageVolumeChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Total Messages",
        data: Object.values(data),
        backgroundColor: "#21409a",
        barThickness: 30,
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        grid: {
          offset: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Bar data={chartData} options={options} />;
};
