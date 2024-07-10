import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryDistributionChart = ({ messages }) => {
  const categoryCounts = {};

  messages.forEach((message) => {
    if (message.category) {
      if (!categoryCounts[message.category]) {
        categoryCounts[message.category] = 0;
      }
      categoryCounts[message.category]++;
    }
  });

  const categories = Object.keys(categoryCounts);
  const data = Object.values(categoryCounts);

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "red",
          "blue",
          "green",
          "yellow",
          "purple",
          "pink",
          "orange",
          "turqouise",
          "black",
          "gray",
        ],
      },
    ],
  };

  return <Pie data={chartData} />;
};
