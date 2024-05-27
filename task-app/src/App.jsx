import "./App.css";
import AllTasks from "./components/AllTasks";

const App = () => {
  return (
    <div className="container-task">
      <h1>Seznam úkolů</h1>
      <AllTasks></AllTasks>
    </div>
  );
};

export default App;
