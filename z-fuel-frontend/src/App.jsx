import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import FindFuelStation from "./pages/FindFuelStation/FindFuelStation";
import OrderOnlineLandingPage from "./pages/OrderOnline/OrderOnlineLandingPage";
import PriceComparison from "./pages/PriceComparison/PriceComparison";
import ShareTank from "./pages/ShareTank/ShareTank";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-a-station" element={<FindFuelStation />} />
      <Route
        path="/order-online-landing-page"
        element={<OrderOnlineLandingPage />}
      />
      <Route path="/price-comparison" element={<PriceComparison />} />
      <Route path="/share-tank" element={<ShareTank />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/confirm-order" element={<ConfirmOrder />} />
    </Routes>
  );
}

export default App;
