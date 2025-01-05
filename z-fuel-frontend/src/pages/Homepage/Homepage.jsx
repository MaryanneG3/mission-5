import Titlebar from "../../common/titlebar/Titlebar";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./Homepage.module.css";

import homapageImage from "../../../public/images/homepage/Homepage-family-photo.jpg";

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
    </BaseLayout>
  );
  s;
}

export default Homepage;
