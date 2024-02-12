import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Blocked Traffic", "Total Traffic"],
  datasets: [
    {
      title: "Threat Meter",
      data: [50, 840],
      backgroundColor: [
        "rgb(50, 205, 50)", //lime
        // "rgb(255,15,15)", //red
        "rgb(128, 128, 128)", //gray
      ],
      // hoverOffset: 4,
    },
  ],
};

function MyChart(props) {
  const options = {
    rotation: 225,
    circumference: 275,
    cutout: `75%`,
    animation: {
      duration: 4000,
      animateRotate: true,
      // animateScale: true,
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default MyChart;
