import React from "react";
import MyDoughnut from "./Doughnut";

import "../css/chart.css";

function MyChart() {
  //data would be passed here by session storage or state
  return (
    <div className="page">
      <span style={{ fontSize: "3em" }}>Threat Meter</span>

      <div className="box">
        <MyDoughnut className="donut" />

        <div className="textandpercent">
          <span
            className="donut-percent"
            style={{
              // color: "rgb(255,15,15)",
              color: "rgb(50, 205, 50)",
            }}
          >
            6%
          </span>
          <span className="donut-text">
            of your traffic was blocked by Kavalan
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyChart;
