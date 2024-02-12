import { Chart } from "chart.js";
import "./App.css";
import MyFastComponent from "./Components/Fast-Test";
import MyQuality1Component from "./Components/Quality1-interactive";
import LoginForm from "./Components/Quality2-interactive";
import Table from "./Components/Table-fast";
import MyChart from "./Components/Chart";

function App() {
  return (
    <>
      <div
        className="page"
        style={{
          width: `50%`,
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          textAlign: "center",
          justifyItems: "center",
        }}
      >
        <span style={{ fontSize: "3em" }}>Threat Meter</span>

        <div
          className="box"
          style={{
            position: `relative`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyChart style={{ position: `absolute`, top: 30, left: 30 }} />
          <div
            className="textandpercent"
            style={{
              position: `absolute`,
              // top: 30,
              // left: 30,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                margin: "40px auto 0 auto",
                fontSize: "13em",
                // color: "rgb(255,15,15)",
                color: "rgb(50, 205, 50)",
              }}
            >
              6%
            </span>
            <span
              style={{
                display: "block",
                fontSize: "3em",
                width: "70%",
              }}
            >
              of your traffic was blocked by Kavalan
            </span>
          </div>
        </div>
      </div>
      <h2>This is a component from a premade form:</h2>
      <MyFastComponent />
      <br />
      <h2>This one was generate with "quality" in two parts.</h2>
      <MyQuality1Component />
      <LoginForm />
      <br />
      {/* <h2>This should looke like our table</h2> */}
      {/* <Table /> */}
    </>
  );
}

export default App;
