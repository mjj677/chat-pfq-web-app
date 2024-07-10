import React from "react";
import { Doughnut } from "react-chartjs-2";

export const UserDoughnutChart = ({ totalUsers }) => {
  const chartData = {
    labels: ["Total Users"],
    datasets: [
      {
        data: [totalUsers],
        backgroundColor: ["#21409a"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};
