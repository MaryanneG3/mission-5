import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import FindFuelStation from "./pages/FindFuelStation/FindFuelStation";
<<<<<<< HEAD
import PriceComparison from "./pages/PriceComparison/PriceComparison";
=======
import OrderOnlineLandingPage from "./pages/OrderOnline/OrderOnlineLandingPage";
import PriceComparison from "./pages/PriceComparison/PriceComparison";
import ShareTank from "./pages/ShareTank/ShareTank";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
>>>>>>> a44013a2628f1e9a3ed14778ca26e07a09c02b80

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/find-a-station" element={<FindFuelStation />} />
<<<<<<< HEAD
      <Route path="/compare-prices" element={<PriceComparison />} />
=======
      <Route
        path="/order-online-landing-page"
        element={<OrderOnlineLandingPage />}
      />
      <Route path="/price-comparison" element={<PriceComparison />} />
      <Route path="/share-tank" element={<ShareTank />} />
      <Route path="/create-account" element={<CreateAccount />} />
>>>>>>> a44013a2628f1e9a3ed14778ca26e07a09c02b80
    </Routes>
  );
}

export default App;
