import { useState } from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

const App = () => {
  const [details, setDetails] = useState({
    security: "120",
    name: "JANE DOE",
    number: "1234 5678 9101 0000",
    month: "13",
    year: "12",
  });

  return (
    <div className="App">
      <LeftPanel details={details} />
      <RightPanel details={details} setDetails={setDetails} />
    </div>
  );
};

export default App;
