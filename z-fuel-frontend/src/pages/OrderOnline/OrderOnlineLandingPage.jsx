import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./OrderOnline.module.css";
import Titlebar from "../../common/titlebar/Titlebar";

function OrderOnlineLandingPage() {
  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="onlineOrder"
        title="Crave it. Order it. Enjoy it."
      />
      Welcome to the order online landing page
    </BaseLayout>
  );
}

export default OrderOnlineLandingPage;
