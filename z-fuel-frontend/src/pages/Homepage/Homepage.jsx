import Titlebar from "../../common/titlebar/Titlebar";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./Homepage.module.css";

import homapageImage from "../../../public/images/homepage/Homepage-family-photo.png";

function Homepage() {
  return (
    <BaseLayout variant="homepage">
      <Titlebar
        variant="default"
        backgroundImage="welcomeToZ"
        title="Welcome to Z"
      />

      <div className={styles.homepageImageContainer}>
        <img
          className={styles.homepageImage}
          src={homapageImage}
          alt="family at z-fuel station"
        />
      </div>

      <Titlebar
        variant="findStation"
        backgroundImage="find-a-station"
        title="Find a Z Station"
      />
      <br />

      <Titlebar
        variant="default"
        backgroundImage="createAccSignIn"
        title="Create Account"
      />

      <br />

      <Titlebar
        variant="default"
        backgroundImage="shareTank"
        title="Share Tank"
      />

      <br />

      <Titlebar
        variant="default"
        backgroundImage="onlineOrder"
        title="Crave it. Order it. Enjoy it."
      />

      <br />

      <main className={styles.main}>
        <div className={styles.shareTankContainer}>
          Share Tank - Placeholder
        </div>

        <div className={styles.priceComparisonContainer}>
          Price Comparison - Placeholder
        </div>

        <div className={styles.orderFoodOnlineContainer}>
          Order Food Online - Placeholder
        </div>
      </main>
    </BaseLayout>
  );
  s;
}

export default Homepage;
