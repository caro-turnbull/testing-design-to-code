import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//lets say for example you had 840 unique domains and kavlan blocked 50 , which would be 6%
//this could be save in state or in the session storage
let total = 840;
let blocked = 50;
let percentage = blocked / total;

const data = {
  labels: ["Blocked Traffic", "Total Traffic"],
  datasets: [
    {
      title: "Threat Meter",
      data: [blocked, total / 2],
      backgroundColor: [
        "rgb(50, 205, 50)", //lime
        // "rgb(255,15,15)", //red
        "rgb(128, 128, 128)", //gray
      ],
      // weight: [2, 1],
      // hoverOffset: 4,
    },
  ],
};

function MyDoughnut(props) {
  //data will probably need to be passed through props

  const options = {
    rotation: 270,
    circumference: 180,
    cutout: `75%`,
    animation: {
      duration: 2500,
      animateRotate: true,
      // animateScale: true,
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default MyDoughnut;
