import BaseLayout from "../../layouts/baselayout/BaseLayout";
import Titlebar from "../../common/titlebar/Titlebar";

function PriceComparison() {
  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="priceComparison"
        title="Fuel your Savings - Compare prices now."
      />
      Welcome to the Price Comparison page
    </BaseLayout>
  );
}

export default PriceComparison;
