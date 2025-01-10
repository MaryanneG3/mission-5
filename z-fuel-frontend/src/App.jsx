import { Routes, Route } from "react-router-dom";
import "./App.css";
// import './builder-registry';
import Homepage from "./pages/Homepage/Homepage";
import FindFuelStation from "./pages/FindFuelStation/FindFuelStation";
import PriceComparison from "./pages/PriceComparison/PriceComparison";
import OrderOnlineLandingPage from "./pages/OrderOnline/OrderOnlineLandingPage";
import ShareTank from "./pages/ShareTank/ShareTank";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-a-station" element={<FindFuelStation />} />
      <Route path="/price-comparison" element={<PriceComparison />} />
      <Route path="/compare-prices" element={<PriceComparison />} />
      <Route path="/order-online-landing-page" element={<OrderOnlineLandingPage />} />
      <Route path="/share-tank" element={<ShareTank />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/confirm-order" element={<ConfirmOrder />} />
    </Routes>
  );
}

export default App;
