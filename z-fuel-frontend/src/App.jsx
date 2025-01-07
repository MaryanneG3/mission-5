import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import FindFuelStation from "./pages/FindFuelStation/FindFuelStation";
import PriceComparison from "./pages/PriceComparison/PriceComparison";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-a-station" element={<FindFuelStation />} />
      <Route path="/compare-prices" element={<PriceComparison />} />
    </Routes>
  );
}

export default App;
