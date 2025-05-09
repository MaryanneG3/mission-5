import Titlebar from "../../common/titlebar/Titlebar";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
import { serviceLinks } from "../../lib/serviceLinks";
import homepageImage from "/images/homepage/Homepage-family-photo.png";

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
          src={homepageImage}
          alt="family at z-fuel station"
        />
      </div>

      <Titlebar
        variant="findStation"
        backgroundImage="find-a-station"
        title="Find a Z Station"
      />
      <main className={styles.mainContainer}>
        {serviceLinks.map((service, index) => (
          <div
            key={index}
            className={`${styles.ContentContainer} ${
              index % 2 === 1 ? styles.ContentContainerFlipped : ""
            }`}
          >
            <div
              className={`${styles.serviceDetailsContainer} ${
                index % 2 === 1 ? styles.serviceDetailsContainerFlipped : ""
              }`}
            >
              <div className={styles.serviceDetails}>
                <h2>{service.serviceTitle}</h2>
                <p>{service.serviceDescription}</p>

                <NavLink to={service.btnLink} className={styles.serviceBtn}>
                  {service.btnTitle}
                </NavLink>
              </div>
            </div>

            <div className={styles.serviceImageContainer}>
              <img className={styles.serviceImg} src={service.imgSrc} />
            </div>
          </div>
        ))}
      </main>
    </BaseLayout>
  );
}

export default Homepage;
