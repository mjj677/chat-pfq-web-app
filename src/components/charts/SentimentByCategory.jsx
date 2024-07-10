import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export const SentimentByCategoryChart = ({ data }) => {
  const categories = Object.keys(data);
  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Positive",
        data: categories.map((category) => data[category].positive),
        backgroundColor: "green",
      },
      {
        label: "Negative",
        data: categories.map((category) => data[category].negative),
        backgroundColor: "red",
      },
    ],
  };

  return <Bar data={chartData} />;
};
