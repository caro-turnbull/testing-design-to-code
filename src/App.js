import "./App.css";
import MyFastComponent from "./Components/Fast-Test";
import MyQuality1Component from "./Components/Quality1-interactive";
import LoginForm from "./Components/Quality2-interactive";
import Table from "./Components/Table-fast";

function App() {
  return (
    <>
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
